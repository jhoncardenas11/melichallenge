import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../search/Search";
import "./ListProducts.scss";

function ListProducts() {

    const [data, setData] = useState(null);

    let products = [];


    const callback = (value) => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${value}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }

    if (data) {
        products = data.results.slice(0, 4);
    }

    return(
        <>
            <Search parentCallback={callback}/>
            <div className="mainContent">
                {products.map(product => 
                    <div className="boxProducts" key={product.id}>
                        <div className="boxItem">
                            <div className="img">
                                <Link to={`/detail/${product.id}`}>
                                    <img src={product.thumbnail} alt={product.title} />
                                </Link>
                            </div>
                            <div className="boxInfo">
                                <p className="price">$ {product.price}</p>
                                <Link to={`/detail/${product.id}`}>
                                    <h2 className="info">{product.title}</h2>
                                </Link>
                            </div>
                            <div className="boxPromo">
                                <p className="promo">Promoción</p>
                            </div>
                        </div>
                    </div>  
                )}
            </div>
        </>
    );
}

export default ListProducts;