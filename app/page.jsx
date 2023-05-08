/** @format */

import React from 'react';

import Feed from '@components/Feed';

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share</h1>
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        <p className="desc text-center">
          AI Tool to create and share creative prompts
        </p>
        <Feed />
      </section>
    </div>
  );
};

export default Home;
