import './styles.css';
import CatalogCard from "../../components/CatalogCard";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="search-bar" className="generic-section">
          <div className="container">
            <SearchBar />
          </div>
        </section>
        <section id="catalog-cards">
          <div className="container">
            <div className="product-listing">
              <CatalogCard />
              <CatalogCard />
              <CatalogCard />
              <CatalogCard />
              <CatalogCard />
              <CatalogCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
