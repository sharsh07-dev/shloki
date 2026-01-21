import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, type = 'website' }) {
  const siteTitle = "Shloki | Strategy & Wisdom";
  const defaultDesc = "Master the 48 Laws of Power and Bhagavad Gita wisdom through interactive daily flashcards.";
  const defaultKeywords = "shloki, 48 laws of power, strategy cards, mental toughness, stoicism, daily wisdom";
  const siteUrl = "https://shloki.in"; 

  // Safe check for window object (prevents build errors)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;

  return (
    <Helmet>
      {/* 1. STANDARD TAGS */}
      <title>{title ? `${title} | Shloki` : siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={currentUrl} />

      {/* 2. OPEN GRAPH (Social Media) */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image || `${siteUrl}/og-image-strategy.jpg`} />

      {/* 3. TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || `${siteUrl}/og-image-strategy.jpg`} />

      {/* 4. STRUCTURED DATA (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "image": image,
          "author": {
            "@type": "Organization",
            "name": "Shloki Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Shloki",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/logo.png`
            }
          },
          "datePublished": "2026-01-21",
          "description": description
        })}
      </script>
    </Helmet>
  );
}