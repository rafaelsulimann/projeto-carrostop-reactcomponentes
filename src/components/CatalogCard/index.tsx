import productImg from '../../assets/product.svg';
import BuyButton from '../BuyButton';
import './styles.css';

export default function CatalogCard() {
    return (
        <div className="catalog-card">
            <img src={productImg} alt="Produto" />
            <h2>Audi Supra TT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            <BuyButton />
        </div>
    );
}