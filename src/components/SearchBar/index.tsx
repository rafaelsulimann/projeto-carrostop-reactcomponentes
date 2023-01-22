import SearchButton from '../SearchButton';
import './styles.css';

export default function SearchBar() {
    return (
        <form className="search-bar-div">
            <input className="search-bar-text" type="text" placeholder="Digite sua busca"/>
            <SearchButton />
        </form>
    );
}