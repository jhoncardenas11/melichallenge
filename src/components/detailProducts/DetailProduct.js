import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../search/Search";
import "./DetailProduct.scss";

function DetailProducts() {

    const params = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    let product;

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });
    }, []);

    if (data) {
        product = data;
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
            <Search />
            <div className="mainContent">
                <div className="boxProduct">
                    <div className="boxItem">
                        <div className="img">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="boxInfo">
                            <h1 className="info">{product.title}</h1>
                            <p className="price">$ {product.price}</p>
                            <button className="buy">Comprar ahora</button>
                        </div>
                        <div className="boxDescription">
                            <p className="title">Descripción</p>
                            <p className="desc">{product.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProducts;