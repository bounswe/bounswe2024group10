package com.bounswe2024group10.Tradeverse.util;

import com.bounswe2024group10.Tradeverse.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JwtUtil {
    private int validity = 1000 * 60 * 60 * 24;
    private String SECRET_KEY = "bounswe2024group10bounswe2024group10bounswe2024group10bounswe2024group10";

    public String generateToken(User user) {
        return Jwts.builder()
            .setSubject(user.getUsername())
            .claim("role", "USER")
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis() + validity))
            .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
            .compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    private boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }
}
