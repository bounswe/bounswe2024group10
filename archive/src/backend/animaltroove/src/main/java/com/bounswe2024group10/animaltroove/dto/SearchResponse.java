package com.bounswe2024group10.animaltroove.dto;

import java.util.ArrayList;
import com.bounswe2024group10.animaltroove.entity.AnimalInfoSearch;
import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.model.Post;

public class SearchResponse {

    private ArrayList<AnimalInfoSearch> animalInfoSearch;
    private ArrayList<RegisteredUser> users;
    private ArrayList<Post> posts;
    private boolean userShouldClarify;


    public SearchResponse() {
        this.animalInfoSearch = new ArrayList<AnimalInfoSearch>();
        this.users = new ArrayList<RegisteredUser>();
        this.posts = new ArrayList<Post>();
        this.userShouldClarify = false;
    }

    // Getters and setters for each field

    public ArrayList<AnimalInfoSearch> getAnimalInfoSearch() {
        return animalInfoSearch;
    }

    public void setAnimalInfoSearch(ArrayList<AnimalInfoSearch> animalInfoSearch) {
        this.animalInfoSearch = animalInfoSearch;
    }

    public ArrayList<Post> getPosts() {
        return posts;
    }

    public void setPosts(ArrayList<Post> posts) {
        this.posts = posts;
    }

    public void setUsers(ArrayList<RegisteredUser> users) {
        this.users = users;
    }

    public ArrayList<RegisteredUser> getUsers() {
        return users;
    }

    public boolean getUserShouldClarify(){return this.userShouldClarify;}

    public void setUserShouldClarify(boolean value){this.userShouldClarify = value;}

}
