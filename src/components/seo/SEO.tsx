import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export const SEO = ({
  title = 'SafeSkillz Limited - Cybersecurity Training & Education',
  description = 'UK-based cybersecurity training provider specialising in defensive and offensive security education for government, corporate and academic clients. NCSC-aligned courses.',
  keywords = 'cybersecurity training, ethical hacking, security operations, incident response, penetration testing, NCSC aligned, SafeSkillz',
  image = '/og-image.jpg',
  url = 'https://safeskillz.co.uk',
  type = 'website',
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="SafeSkillz Limited" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="SafeSkillz Limited" />
    </Helmet>
  )
}