import { useParams, Link } from "react-router-dom";
import Search from "../search/Search";
import testImg from "../../assets/images/image.jpeg";
import "./DetailProduct.scss";

function DetailProducts() {

    const params = useParams();

    return(
        <>
            <Search />
            <div className="mainContent">
                <div className="breadCrumb">
                    <p>
                        <span>
                            <Link to="/">span1</Link>
                        </span>
                        <span>
                            <Link to="/">/ span2</Link>
                        </span>
                        <span>
                            <Link to="/">/ span3</Link>
                        </span>
                    </p>
                </div>
                <div className="boxProduct">
                    <div className="boxItem">
                        <div className="img">
                            <img src={testImg} alt="test" />
                        </div>
                        <div className="boxInfo">
                            <h1 className="info">Lorem ipsum dolor sit amet consectetur adipisicing. {params.id}</h1>
                            <p className="price">$ 1.264</p>
                            <button className="buy">Comprar ahora</button>
                        </div>
                        <div className="boxDescription">
                            <p className="title">Descripción</p>
                            <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus itaque vel adipisci perferendis quis eveniet minus sequi amet nemo quas, nulla ut ab eaque sapiente labore. Nihil dolores nam autem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProducts;