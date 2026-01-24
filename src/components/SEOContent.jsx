import React from 'react';
// 👇 Ensure this points to your real file (keyword.js or keywords.js)
import { SEO_KEYWORDS } from '../lib/keywords'; 

const SEOContent = () => {
  // Safety check: Ensure keywords is an array to prevent crashes
  const keywords = Array.isArray(SEO_KEYWORDS) ? SEO_KEYWORDS : [];

  return (
    <div style={{ display: 'none' }}>
       <h3>Frequently Searched Topics</h3>
       <p>{keywords.join(', ')}</p>
    </div>
  );
};

// 👇 THIS LINE WAS MISSING OR BROKEN. IT IS REQUIRED.
export default SEOContent;