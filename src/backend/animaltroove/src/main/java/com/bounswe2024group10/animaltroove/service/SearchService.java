package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.SearchResponse;

import java.util.List;

import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.springframework.stereotype.Service;

@Service
public class SearchService {

    public SearchResponse search(String searchTerm) {
        String entityURI = getEntityURI(searchTerm);
        if (entityURI == null) {
            return null;
        }
        SearchResponse searchResponse = getAnimalDetails(entityURI);
        return searchResponse;
    }

    public String getEntityURI(String searchTerm) {
        String sparqlEndpoint = "https://query.wikidata.org/sparql";
        String queryString = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "SELECT ?entity\n" +
                "WHERE {\n" +
                "?entity rdfs:label \"" + searchTerm + "\"@en.\n" +
                "?entity wdt:P31 wd:Q16521\n" +
                "}";

        QueryExecution queryExec = QueryExecutionFactory.sparqlService(sparqlEndpoint, queryString);
        ResultSet resultSet = queryExec.execSelect();
        if (resultSet.hasNext()) {
            QuerySolution querySolution = resultSet.next();
            if (querySolution.get("entity") != null) {
                return querySolution.get("entity").toString().split("/")[4];
            }
        }
        return null;
    }

    SearchResponse getAnimalDetails(String entityURI) {
        String sparqlEndpoint = "https://query.wikidata.org/sparql";
        String queryString = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                "PREFIX bd: <http://www.bigdata.com/rdf#>\n" +
                "SELECT ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel\n" +
                "WHERE {\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P225 ?name.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P9566 ?cycle.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P3063 ?preg.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P2250 ?life.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P3395 ?heart.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P2052 ?speed.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P7725 ?numBirth.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P2050 ?wingSpan.}\n" +
                "  OPTIONAL {wd:" + entityURI + " wdt:P141 ?conservationStat.}\n" +
                "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\". }\n" +
                "}";
        QueryExecution queryExec = QueryExecutionFactory.sparqlService(sparqlEndpoint, queryString);
        ResultSet resultSet = queryExec.execSelect();
        if (resultSet.hasNext()) {
            QuerySolution querySolution = resultSet.next();
            SearchResponse searchResponse = new SearchResponse();
            if (querySolution.get("nameLabel") != null) {
                searchResponse.setName(querySolution.get("nameLabel").toString());
            }
            if (querySolution.get("cycleLabel") != null) {
                searchResponse.setCycle(querySolution.get("cycleLabel").toString());
            }
            if (querySolution.get("pregLabel") != null) {
                searchResponse.setPregnancy(querySolution.get("pregLabel").toString());
            }
            if (querySolution.get("lifeLabel") != null) {
                searchResponse.setLifeExpectancy(querySolution.get("lifeLabel").toString());
            }
            if (querySolution.get("heartLabel") != null) {
                searchResponse.setHeartRate(querySolution.get("heartLabel").toString());
            }
            if (querySolution.get("speedLabel") != null) {
                searchResponse.setSpeed(querySolution.get("speedLabel").toString());
            }
            if (querySolution.get("numBirthLabel") != null) {
                searchResponse.setNumberOfBirths(querySolution.get("numBirthLabel").toString());
            }
            if (querySolution.get("wingSpanLabel") != null) {
                searchResponse.setWingSpan(querySolution.get("wingSpanLabel").toString());
            }
            if (querySolution.get("conservationStatLabel") != null) {
                String conservationStatLabel = querySolution.get("conservationStatLabel").toString();
                if (conservationStatLabel.contains("@en")) {
                    conservationStatLabel = conservationStatLabel.substring(0, conservationStatLabel.indexOf("@en"));
                }
            }
            return searchResponse;
        }
        return null;
    }
}