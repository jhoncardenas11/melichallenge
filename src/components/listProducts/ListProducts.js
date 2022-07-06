import { Link } from "react-router-dom";
import "./ListProducts.scss";
import testImg from "../../assets/images/image.jpeg";

function ListProducts() {
    return(
        <>
            <div className="mainContent">
                <div className="breadCrumb">
                    <p>
                        <span>
                            <Link to="/">span1 </Link>
                        </span>
                        <span>
                            <Link to="/">/ span2 </Link>
                        </span>
                        <span>
                            <Link to="/">/ span3</Link>
                        </span>
                    </p>
                </div>
                <div className="boxProducts">
                    <div className="boxItem">
                        <div className="img">
                            <Link to="/detail/1">
                                <img src={testImg} alt="test" />
                            </Link>
                        </div>
                        <div className="boxInfo">
                            <p className="price">$ 1.264</p>
                            <Link to="/detail/1">
                                <h2 className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem vero iure voluptates vitae.</h2>
                            </Link>
                        </div>
                        <div className="boxPromo">
                            <p className="promo">Promoción</p>
                        </div>
                    </div>
                    <div className="boxItem">
                        <div className="img">
                            <Link to="/detail/2">
                                <img src={testImg} alt="test" />
                            </Link>
                        </div>
                        <div className="boxInfo">
                            <p className="price">$ 1.264</p>
                            <Link to="/detail/2">
                                <h2 className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem vero iure voluptates vitae.</h2>
                            </Link>
                        </div>
                        <div className="boxPromo">
                            <p className="promo">Promoción</p>
                        </div>
                    </div>
                    <div className="boxItem">
                        <div className="img">
                            <Link to="/detail/3">
                                <img src={testImg} alt="test" />
                            </Link>
                        </div>
                        <div className="boxInfo">
                            <p className="price">$ 1.264</p>
                            <Link to="/detail/3">
                                <h2 className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem vero iure voluptates vitae.</h2>
                            </Link>
                        </div>
                        <div className="boxPromo">
                            <p className="promo">Promoción</p>
                        </div>
                    </div>
                    <div className="boxItem">
                        <div className="img">
                            <Link to="/detail/4">
                                <img src={testImg} alt="test" />
                            </Link>
                        </div>
                        <div className="boxInfo">
                            <p className="price">$ 1.264</p>
                            <Link to="/detail/4">
                                <h2 className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem vero iure voluptates vitae.</h2>
                            </Link>
                        </div>
                        <div className="boxPromo">
                            <p className="promo">Promoción</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListProducts;