import { Helmet } from 'react-helmet'

function SEO({ title = 'SamEst Web Dev | Modern, Bold Websites', description = 'Web development, professional websites, e-commerce websites, portfolio websites. SamEst Web Dev builds modern, bold, responsive sites optimized for SEO and performance.', keywords = 'web development, website design, professional websites, e-commerce websites, portfolio websites, landing pages, SEO optimization' }){
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0b1220" />
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href="/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero_home.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO
