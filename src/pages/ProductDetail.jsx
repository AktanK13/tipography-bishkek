import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
function ProductDetail({ detail }) {
  let { id } = useParams();
  const product = detail.find((product) => String(product.url) === id);

  return (
    <div className=" w-full h-full bg-[url('/homeBackground.png')]">
      <div className=" w-11/12 m-auto py-20">
        <h1 className="text-center text-4xl font-semibold py-4">
          {product.name}
        </h1>
        <div className=" md:w-[70%] xl:w-[30%] m-auto">
          <Carousel images={product.images} />
        </div>
        <p
          className="text-justify py-8"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
