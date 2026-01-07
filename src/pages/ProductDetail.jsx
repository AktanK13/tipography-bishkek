import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import SEO from "../components/SEO";

function ProductDetail({ detail }) {
  let { id } = useParams();
  const product = detail.find((product) => String(product.url) === id);

  if (!product) {
    return <div>Товар не найден</div>;
  }

  // Создаем описание без HTML тегов для мета-описания
  const cleanDescription = product.description
    ? product.description.replace(/<[^>]*>/g, '').substring(0, 160)
    : `Печать ${product.name.toLowerCase()} в Бишкеке. Профессиональная типография предлагает качественную печать ${product.name.toLowerCase()} по доступным ценам.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${product.name}`,
    "description": cleanDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Типография Бишкек",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Логвиненко, 59",
        "addressLocality": "Бишкек",
        "addressCountry": "KG"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Бишкек"
    }
  };

  return (
    <>
      <SEO 
        title={`${product.name}`}
        description={`${cleanDescription} Заказ онлайн с доставкой по Бишкеку.`}
        keywords={`печать ${product.name.toLowerCase()} Бишкек, ${product.name.toLowerCase()} Бишкек, типография Бишкек ${product.name.toLowerCase()}, заказать ${product.name.toLowerCase()} Бишкек`}
        canonical={`/${product.url}`}
        structuredData={structuredData}
      />
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
    </>
  );
}

export default ProductDetail;
