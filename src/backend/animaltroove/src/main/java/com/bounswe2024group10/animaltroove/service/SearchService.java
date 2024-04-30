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
        String entityURI = getEntityURI(searchTerm);
        System.out.println("Entity URI" +entityURI);
        if (entityURI == null) {
            return null;
        }
        List<SearchResponse> searchResponse = getAnimalDetails(entityURI);
        System.out.println(searchResponse.toString());
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



        String qStringTest = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "                PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "                PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n" +
                "SELECT ?entity\n" +
                "WHERE {\n" +
                "    ?entity skos:altLabel ?alias .\n" +
                "  FILTER(CONTAINS(LCASE(?alias), \" "+searchTerm.toLowerCase() + "\"))\n" +
//               "  {\n" +
//               "    ?entity wdt:P31 wd:Q16521 .\n" +
//               "  }\n" +
//               "  UNION\n" +
                "  {\n" +
                "    ?entity wdt:P279* wd:Q729 .\n" +
                "  }\n" +
//               "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\". }\n" +
                "}\n" +
                "LIMIT 20";
        Query query1 = QueryFactory.create(qStringTest);
        QueryExecution qexec =  QueryExecutionFactory.sparqlService(sparqlEndpoint,query1);
        ResultSet resultSet = qexec.execSelect();
        System.out.println("REsult rows" + resultSet.getRowNumber());
        if (resultSet.hasNext()) {
            QuerySolution querySolution = resultSet.next();
            if (querySolution.get("entity") != null) {
                System.out.println("WE HAVE ENTITY");
                return querySolution.get("entity").toString().split("/")[4];
            }
        }
        return null;
    }

    List<SearchResponse> getAnimalDetails(String entityURI) {
        System.out.println("Entitiy URI is : "+ entityURI);
        String sparqlEndpoint = "https://query.wikidata.org/sparql";
        String queryString = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
                "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n" +
                "PREFIX wd: <http://www.wikidata.org/entity/>\n" +
                "PREFIX wikibase: <http://wikiba.se/ontology#>\n" +
                "PREFIX bd: <http://www.bigdata.com/rdf#>\n" +
                "SELECT ?itemLabel ?picLabel ?nameLabel ?cycleLabel ?pregLabel ?lifeLabel ?heartLabel ?speedLabel ?numBirthLabel ?wingSpanLabel ?conservationStatLabel\n" +
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
                "}";
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
            if(querySolution.get("picLabel")!=null){
                searchResponse.setPic(querySolution.get("picLabel").toString());
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
