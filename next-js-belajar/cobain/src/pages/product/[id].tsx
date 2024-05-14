import { useRouter } from "next/router";

const DetailProductPage = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>Detail Product</h1>
            <p>Product : </p>
        </div>
    );
};

export default DetailProductPage;