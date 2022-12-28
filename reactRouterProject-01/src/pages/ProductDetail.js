import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const parms = useParams();

    console.log(parms.productId);

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{parms.productId}</p>
        </section>
    )
};

export default ProductDetail;
