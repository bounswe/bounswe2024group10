package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.SearchResponse;

import java.util.ArrayList;
import java.util.List;

import org.apache.jena.query.*;
import org.springframework.stereotype.Service;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;

@Service
public class SearchService {

    public List<SearchResponse> search(String searchTerm) {
        if (searchTerm.charAt(0) == 'u') {
            //Find the users with the username
        }

        else if (searchTerm.charAt(0) == 's') { //Find a species
            searchTerm = searchTerm.substring(searchTerm.indexOf('@') + 1);
            String entityURI = getEntityURI(searchTerm);
            if (entityURI == null) {
                return null;
            }
            List<SearchResponse> searchResponse = getAnimalDetails(entityURI);
            return searchResponse;
        }

        else if (searchTerm.charAt(0) == 'f') { //Find species from a family
            searchTerm = searchTerm.substring(searchTerm.indexOf('@') + 1);
            String familyURI = getFamilyURI(searchTerm);
            if (familyURI == null) {
                return null;
            }       
            List<SearchResponse> searchResponse = getSpeciesOfFamily(familyURI);
            return searchResponse;
        }
        else if (searchTerm.charAt(0) == 'w') {
            searchTerm = searchTerm.substring(searchTerm.indexOf('@') + 1);
            List<SearchResponse> searchResponse = getWellKnowns(searchTerm);
            return searchResponse;
        }
        return null;
    }

    public String getEntityURI(String searchTerm) {
        ArrayList<String> alternativeQueries = new ArrayList<>();
        String sparqlEndpoint = "https://query.wikidata.org/sparql";
        String queryString1 = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "SELECT ?entity\n" +
                "WHERE {\n" +
                "?entity rdfs:label \"" + searchTerm + "\"@en.\n" +
                "?entity wdt:P31 wd:Q16521\n" +
                "}\n" + 
                "LIMIT 1";
        alternativeQueries.add(queryString1);


        String queryString2 = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "                PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "                PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n" +
                "SELECT ?entity\n" +
                "WHERE {\n" +
                "    ?entity skos:altLabel ?alias .\n" +
                "    ?entity wdt:P32 wd:Q16521. \n" +
                "  FILTER(CONTAINS(LCASE(?alias), \" "+searchTerm.toLowerCase() + "\"))\n" +                
                "}\n" +
                "LIMIT 1";
        
        alternativeQueries.add(queryString2);

        String queryString3 = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "SELECT ?entity\n" +
                "WHERE {\n" +
                "?entity rdfs:label \"" + searchTerm + "\"@en.\n" +
                "?entity wdt:P279* wd:Q729\n" +
                "}\n" + 
                "LIMIT 1";
        alternativeQueries.add(queryString3);

        for (int i = 0; i < alternativeQueries.size();i++) {
            Query query1 = QueryFactory.create(alternativeQueries.get(i));
            QueryExecution qexec =  QueryExecutionFactory.sparqlService(sparqlEndpoint,query1);
            ResultSet resultSet = qexec.execSelect();
            if (resultSet.hasNext()) {
                QuerySolution querySolution = resultSet.next();
                if (querySolution.get("entity") != null) {
                    return querySolution.get("entity").toString().split("/")[4];
                }
            }
        }
        return null;
    }

    public String getFamilyURI(String searchTerm) {

        ArrayList<String> alternativeQueries = new ArrayList<>();
        String sparqlEndpoint = "https://query.wikidata.org/sparql";
        String queryString1 = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                                "PREFIX ontology: <http://www.w3.org/2002/07/owl#>\n" +
                                "SELECT ?entity\n" +
                                "WHERE {\n" +
                                "  ?entity rdfs:label \"" + searchTerm + "\"@en.\n" +
                                "  ?entity wdt:P31 wd:Q16521.\n" +
                                "  MINUS { ?entity wdt:P105 wd:Q7432 } \n" +
                                "}";
        alternativeQueries.add(queryString1);

        /*
        This query can return multiple results.
        User has to specify further which one they would like to see.
        */
        String queryString2 = "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                                "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                                "PREFIX ontology: <http://www.w3.org/2002/07/owl#>\n" +"PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                                "PREFIX bd: <http://www.bigdata.com/rdf#>\n" +
                                "SELECT ?item ?itemLabel\n" +
                                "WHERE {\n" +
                                "  ?item wdt:P31 wd:Q55983715.\n" +
                                "  ?item rdfs:label ?itemLabel.\n" +
                                "  FILTER(LANG(?itemLabel) = \"en\" && REGEX(CONCAT(' ', LCASE(?itemLabel), ' '), '" + searchTerm + "', \"i\")).\n" +
                                "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\". }\n" +
                                "}\n" +
                                "LIMIT 1";
        
        alternativeQueries.add(queryString2);

        /*
        String queryString3 = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "SELECT ?entity\n" +
                "WHERE {\n" +
                "?entity rdfs:label \"" + searchTerm + "\"@en.\n" +
                "?entity wdt:P279* wd:Q729\n" +
                "}\n" + 
                "LIMIT 1";
        alternativeQueries.add(queryString3);
        */

        for (int i = 0; i < alternativeQueries.size();i++) {
            Query query1 = QueryFactory.create(alternativeQueries.get(i));
            QueryExecution qexec =  QueryExecutionFactory.sparqlService(sparqlEndpoint,query1);
            ResultSet resultSet = qexec.execSelect();
            if (resultSet.hasNext()) {
                QuerySolution querySolution = resultSet.next();
                if (querySolution.get("entity") != null) {
                    return querySolution.get("entity").toString().split("/")[4];
                }
            }
        }
        return null;
    }

    List<SearchResponse> getWellKnowns(String searchTerm) {
        String sparqlEndpoint = "https://query.wikidata.org/sparql";

        String queryString = "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX bd: <http://www.bigdata.com/rdf#>\n" +
                "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                "SELECT ?nameLabel ?itemLabel (SAMPLE(?pic) AS ?samplePic)\n" +
                "WHERE {\n" +
                "  ?item wdt:P31 wd:Q55983715.\n" +
                "  FILTER(LANG(?itemLabel) = 'en' && REGEX(CONCAT(' ', LCASE(?itemLabel), ' '), '" + searchTerm + "', 'i')).\n" +
                "  ?item rdfs:label ?itemLabel.\n" +
                "  OPTIONAL { ?item wdt:P18 ?pic. }\n" +
                "  OPTIONAL { ?item wdt:P225 ?name. }\n" +
                "  SERVICE wikibase:label { bd:serviceParam wikibase:language 'en'. }\n" +
                "}\n" +
                "GROUP BY ?nameLabel ?itemLabel";
       
        Query query1 = QueryFactory.create(queryString);
        QueryExecution qexec =  QueryExecutionFactory.sparqlService(sparqlEndpoint,query1);
        ResultSet resultSet = qexec.execSelect();
        ArrayList<SearchResponse> results = new ArrayList<>();


        while (resultSet.hasNext()) {
            QuerySolution querySolution = resultSet.next();
            SearchResponse searchResponse = new SearchResponse();
            if (querySolution.get("nameLabel") != null) {
                searchResponse.setName(querySolution.get("nameLabel").toString());
            }
            
            if (querySolution.get("itemLabel") != null) {
                String itemLabel = querySolution.get("itemLabel").toString();
                if (itemLabel.contains("@en")) {
                    itemLabel = itemLabel.substring(0, itemLabel.indexOf("@en"));
                }
                searchResponse.setMainLabel(itemLabel);
            }
            if(querySolution.get("samplePic")!=null){
                searchResponse.setPic(querySolution.get("samplePic").toString());
            } 
            results.add(searchResponse);
        }
        return results;
    }
    

    List<SearchResponse> getAnimalDetails(String entityURI) {
        String sparqlEndpoint = "https://query.wikidata.org/sparql";
        String queryString = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                "PREFIX bd: <http://www.bigdata.com/rdf#>\n" +
                "SELECT ?itemLabel ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel (SAMPLE(?pic) AS ?samplePic)\n" +
                "WHERE {\n" +
                "  wd:" + entityURI + " rdfs:label ?itemLabel .\n" + // Fetch the label of the main item
                "  FILTER(LANG(?itemLabel) = \"en\")\n" + // Ensure the label is in English
                "  OPTIONAL {wd:" + entityURI + " wdt:P18 ?pic.}\n" +
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
                "}\n" +
                "GROUP BY ?itemLabel ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel" ;
                
        Query query2 = QueryFactory.create(queryString);
        QueryExecution queryExec = QueryExecutionFactory.sparqlService(sparqlEndpoint,query2);
        ResultSet resultSet = queryExec.execSelect();

        List<SearchResponse> results = new ArrayList<>();
        while (resultSet.hasNext()) {
            QuerySolution querySolution = resultSet.next();
            SearchResponse searchResponse = new SearchResponse();
            if (querySolution.get("nameLabel") != null) {
                searchResponse.setName(querySolution.get("nameLabel").toString());
            }
            if (querySolution.get("cycleLabel") != null) {
                String cycleLabel = querySolution.get("cycleLabel").toString();
                if (cycleLabel.contains("@en")) {
                    cycleLabel = cycleLabel.substring(0, cycleLabel.indexOf("@en"));
                }
                searchResponse.setCycle(cycleLabel);
            }
            if (querySolution.get("itemLabel") != null) {
                String itemLabel = querySolution.get("itemLabel").toString();
                if (itemLabel.contains("@en")) {
                    itemLabel = itemLabel.substring(0, itemLabel.indexOf("@en"));
                }
                searchResponse.setMainLabel(itemLabel);
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
            if(querySolution.get("samplePic")!=null){
                searchResponse.setPic(querySolution.get("samplePic").toString());
            }
            if (querySolution.get("wingSpanLabel") != null) {
                searchResponse.setWingSpan(querySolution.get("wingSpanLabel").toString());
            }
            if (querySolution.get("conservationStatLabel") != null) {
                String conservationStatLabel = querySolution.get("conservationStatLabel").toString();
                if (conservationStatLabel.contains("@en")) {
                    conservationStatLabel = conservationStatLabel.substring(0, conservationStatLabel.indexOf("@en"));
                }
                searchResponse.setConservationStatus(conservationStatLabel);

            }
            results.add(searchResponse);
        }
        return results;
    }

    List<SearchResponse> getSpeciesOfFamily(String familyURI) {
        
        ArrayList<String> alternativeQueries = new ArrayList<>();
        String sparqlEndpoint = "https://query.wikidata.org/sparql";
        String queryString1 = "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "SELECT ?itemLabel ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel (SAMPLE(?pic) AS ?samplePic)\n" +
                "WHERE {\n" +
                "  ?item wdt:P279+ wd:" + familyURI + ".\n" +                
                "  ?item rdfs:label ?itemLabel.\n" +
                "  FILTER(LANG(?itemLabel) = \"en\")\n" +
                "  MINUS { ?item wdt:P279* wd:Q1797813 }\n" +
                "  OPTIONAL {?item wdt:P18 ?pic.}\n" +
                "  OPTIONAL {?item wdt:P225 ?name.}\n" +
                "  OPTIONAL {?item wdt:P9566 ?cycle.}\n" +
                "  OPTIONAL {?item wdt:P3063 ?preg.}\n" +
                "  OPTIONAL {?item wdt:P2250 ?life.}\n" +
                "  OPTIONAL {?item wdt:P3395 ?heart.}\n" +
                "  OPTIONAL {?item wdt:P2052 ?speed.}\n" +
                "  OPTIONAL {?item wdt:P7725 ?numBirth.}\n" +
                "  OPTIONAL {?item wdt:P2050 ?wingSpan.}\n" +
                "  OPTIONAL {?item wdt:P141 ?conservationStat.}\n" +
                "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\". }\n" +
                "}\n" +
                "GROUP BY ?itemLabel ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel" +
                "ORDER BY RAND()\n" +
                "LIMIT 1000";
        alternativeQueries.add(queryString1);
        
        String queryString2 = "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "SELECT ?itemLabel ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel (SAMPLE(?pic) AS ?samplePic)\n" +
                "WHERE {\n" +
                "  ?item wdt:P171* wd:" + familyURI + ".\n" +
                "  ?item wdt:P31 wd:Q16521.\n" +
                "  ?item wdt:P105 wd:Q7432.\n" +
                "  ?item rdfs:label ?itemLabel.\n" +
                "  FILTER(LANG(?itemLabel) = \"en\").\n" +
                "  OPTIONAL { ?item wdt:P18 ?pic. }\n" +
                "  OPTIONAL { ?item wdt:P225 ?name. }\n" +
                "  OPTIONAL {?item wdt:P9566 ?cycle.}\n" +
                "  OPTIONAL {?item wdt:P3063 ?preg.}\n" +
                "  OPTIONAL {?item wdt:P2250 ?life.}\n" +
                "  OPTIONAL {?item wdt:P3395 ?heart.}\n" +
                "  OPTIONAL {?item wdt:P2052 ?speed.}\n" +
                "  OPTIONAL {?item wdt:P7725 ?numBirth.}\n" +
                "  OPTIONAL {?item wdt:P2050 ?wingSpan.}\n" +
                "  OPTIONAL {?item wdt:P141 ?conservationStat.}\n" +
                "}\n" +
                "GROUP BY ?itemLabel ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel" +
                "ORDER BY RAND()\n" +
                "LIMIT 1000";
        alternativeQueries.add(queryString2);

        for (int i = 0; i < alternativeQueries.size(); i++) {
            Query query2 = QueryFactory.create(alternativeQueries.get(i));
            QueryExecution queryExec = QueryExecutionFactory.sparqlService(sparqlEndpoint,query2);
            ResultSet resultSet = queryExec.execSelect();

            List<SearchResponse> results = new ArrayList<>();
            if (resultSet.hasNext()) {
                while (resultSet.hasNext()) {
                    QuerySolution querySolution = resultSet.next();
                    SearchResponse searchResponse = new SearchResponse();
                    if (querySolution.get("nameLabel") != null) {
                        searchResponse.setName(querySolution.get("nameLabel").toString());
                    }
                    if (querySolution.get("cycleLabel") != null) {
                        String cycleLabel = querySolution.get("cycleLabel").toString();
                        if (cycleLabel.contains("@en")) {
                            cycleLabel = cycleLabel.substring(0, cycleLabel.indexOf("@en"));
                        }
                        searchResponse.setCycle(cycleLabel);
                    }
                    if (querySolution.get("itemLabel") != null) {
                        String itemLabel = querySolution.get("itemLabel").toString();
                        if (itemLabel.contains("@en")) {
                            itemLabel = itemLabel.substring(0, itemLabel.indexOf("@en"));
                        }
                        searchResponse.setMainLabel(itemLabel);
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
                    if(querySolution.get("samplePic")!=null){
                        searchResponse.setPic(querySolution.get("samplePic").toString());
                    }
                    if (querySolution.get("wingSpanLabel") != null) {
                        searchResponse.setWingSpan(querySolution.get("wingSpanLabel").toString());
                    }
                    if (querySolution.get("conservationStatLabel") != null) {
                        String conservationStatLabel = querySolution.get("conservationStatLabel").toString();
                        if (conservationStatLabel.contains("@en")) {
                            conservationStatLabel = conservationStatLabel.substring(0, conservationStatLabel.indexOf("@en"));
                        }
                        searchResponse.setConservationStatus(conservationStatLabel);

                    }
                    results.add(searchResponse);
                }
                return results;
            }
        }
        return new ArrayList<SearchResponse>();
    }
}
