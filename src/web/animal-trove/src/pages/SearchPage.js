//Home.js
import React, { useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import PostCard from "../components/PostCard";
import mockData from "../constants/mockData";
import styles from "./SearchPage.module.css";
import AuthenticatedPage from "../components/AuthenticatedPage";
import { search } from "../services/search";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchKey) => {
    try {
      setLoading(true);
      const response = await search({ searchTerm: searchKey });
      setData(response);
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <AuthenticatedPage>
      <MainLayout>
        <div className={styles.header}>
          <div className={styles.searchContainer}>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(searchTerm);
              }}
            >
              <input
                type="text"
                placeholder="Search for an animal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchBar}
              />
            </form>
          </div>
        </div>
        <div className={styles.searchResults}>
          {loading && <p>Loading...</p>}
          {!loading && data && data.length === 0 && <p>No results found</p>}
          {!loading && data && data.length > 0 && (
            <p>Found {data.length} results</p>
          )}
        </div>
        {!loading &&
          data &&
          data?.map((animal) => (
            <div className={styles.resultContainer}>
              <div className={styles.animalCard}>
                <img
                  src={animal?.pic}
                  alt="animal"
                  className={styles.animalImage}
                />
                <div className={styles.subInfo}>
                  <h2>{animal?.mainLabel}</h2>
                  <h3 className={styles.name}>{animal?.name}</h3>
                  <h3 className={styles.name}>
                    Speed: {animal?.speed ?? "N/A"}
                  </h3>
                  <h3 className={styles.name}>
                    Conservation Status: {animal?.conservationStatus ?? "N/A"}
                  </h3>
                  <h3 className={styles.name}>
                    Diel cycle: {animal?.cycle ?? "N/A"}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </MainLayout>
    </AuthenticatedPage>
  );
}
