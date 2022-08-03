import "./Search.scss";
import logo from "../../assets/images/logo__large_plus.png";

function Search({ parentCallback }) {

    let handleSubmit;

    handleSubmit = (e) => {
        e.preventDefault();
        parentCallback(e.target[0].value);
    }

    return(
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Main logo" />
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="search" name="search" id="search" placeholder="Nunca dejes de buscar" />
                    <button type="submit">Buscar</button>
                </form>
            </nav>
        </>
    );
}

export default Search;