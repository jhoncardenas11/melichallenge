/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../search/Search";
import "./DetailProduct.scss";
import notFound from "../../assets/images/notfound.png";

function DetailProducts() {

    const params = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [desc, setDesc] = useState(null);
    let product;
    let description;
    let img;

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${params.id}/description`)
            .then((response) => response.json())
            .then((data) => {
                setDesc(data);
                setIsLoading(false);
            });
    }, []);

    if (data) {
        product = data;
    }

    if (desc) {
        description = desc.plain_text;
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

    if (product.thumbnail) {
        img = product.thumbnail;
    } else {
        img = notFound;
    }

    return(
        <>
            <Search />
            <div className="mainContent">
                <div className="boxProduct">
                    <div className="boxItem">
                        <div className="img">
                            <img src={img} alt={product.title} />
                        </div>
                        <div className="boxInfo">
                            <h1 className="info">{product.title}</h1>
                            <p className="price">$ {product.price}</p>
                            <button className="buy">Comprar ahora</button>
                        </div>
                        <div className="boxDescription">
                            <p className="title">Descripción</p>
                            <p className="desc">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProducts;