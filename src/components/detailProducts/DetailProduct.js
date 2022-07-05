import { useParams } from "react-router-dom";

function DetailProducts() {

    const params = useParams();

    return(
        <>
            <h1>Detail products {params.id} </h1>
        </>
    );
}

export default DetailProducts;