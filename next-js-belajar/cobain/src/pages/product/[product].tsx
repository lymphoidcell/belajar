import { useRouter } from "next/router";

const DetailProductPage = () => {
    const { query } = useRouter();
    return ( // bisa digunakan untuk data fetching ke API
        <div>
            <h1>Detail Product</h1>
            <p>Product : {query.product} </p>
        </div>
    );
};

export default DetailProductPage;