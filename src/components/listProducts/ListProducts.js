import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ListProducts.scss";

function ListProducts() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    let products = [];

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=:windows")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });
    }, []);

    if (data) {
        products = data.results.slice(0, 4);
    }

    if (isLoading) {
        return(
            <>
                <div className="charge">
                    <h1>Cargando...</h1>
                </div>
            </>
        );
    }
    return(
        <>
            <div className="mainContent">
                {products.map(product => 
                    <div className="boxProducts">
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