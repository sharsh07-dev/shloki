import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shloki - Ancient Wisdom for Modern Life</title>
        <meta name="description" content="Master ancient wisdom with Shloki. Read the Bhagavad Gita, Chanakya Niti, and 48 Laws of Power in flashcard format." />
        <link rel="canonical" href="https://shloki.com/" />
      </Helmet>

      <div className="home-content">
        <h1>Welcome to Shloki</h1>
        {/* Add your landing page components here */}
      </div>
    </>
  );
};

// 👇 THIS LINE IS MISSING OR WRONG
export default Home;