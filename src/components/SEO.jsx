import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  structuredData 
}) => {
  const siteUrl = 'https://tipography-bishkek.kg';
  const fullTitle = title ? `${title} | Типография Бишкек` : 'Типография в Бишкеке | Печать визиток, буклетов, брошюр | Заказ онлайн';
  const fullDescription = description || 'Профессиональная типография в Бишкеке. Печать визиток, буклетов, брошюр, листовок, календарей, блокнотов. Офсетная и цифровая печать. Быстро, качественно, недорого. Заказ онлайн с доставкой.';
  const fullKeywords = keywords || 'типография Бишкек, печать визиток Бишкек, буклеты Бишкек, брошюры Бишкек, листовки Бишкек, календари Бишкек, блокноты Бишкек, полиграфия Бишкек, офсетная печать, цифровая печать, заказ онлайн, доставка';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage || `${siteUrl}/assets/optimized/banner.webp`;

  return (
    <Helmet>
      {/* Основные мета-теги */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Типография Бишкек" />
      <meta property="og:locale" content="ru_KG" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Структурированные данные */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;

