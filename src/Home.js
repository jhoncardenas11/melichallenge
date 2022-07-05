import ListProducts from "./components/listProducts/ListProducts";
import Search from "./components/search/Search";

function Home() {
    return(
        <>
            <Search />
            <ListProducts />
        </>
    );
}

export default Home;