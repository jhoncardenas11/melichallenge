import "./Search.scss";
import logo from "../../assets/images/logo__large_plus.png";

function Search() {
    return(
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Main logo" />
                </div>
                <form action="">
                    <input type="search" name="" id="" placeholder="Nunca dejes de buscar" />
                    <button type="submit">lupita</button>
                </form>
            </nav>
        </>
    );
}

export default Search;