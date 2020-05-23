import { h } from 'preact';
import { Link } from 'preact-router/match';

const WhatNext = () => (
  <div class="py-12 px-12 ">
    <h1 class="mb-5 text-3xl text-gray-700 font-extrabold capitalize tracking-wide sm:text-5xl lg:text-6xl lg:tracking-wider">
      What's Next?
    </h1>
    <div>
      <p class="mb-3 text-lg leading-tight font-semibold text-gray-700 md:text-3xl">
        In the process of starting a web development business
      </p>
      <div class="pl-3 mb-4 text-sm italic border-b-2 border-gray-400 md:text-lg">
        <p class="mb-2">
          - don't build wordpress sites, build with a framework
        </p>
        <p class="mb-2">
          - start out with mostly static sites with contact forms/blogs and
          focus on SEO/SEM & speed. Keep it simple to start
        </p>
        <p class="mb-3">
          - target businesses I know in the beginning, service businesses like
          Roofers/Painters/Landscaping/etc&hellip;
        </p>
      </div>
      <p class="mb-3 text-lg leading-tight font-semibold text-gray-700 md:text-3xl">
        Fat Kitten Web Services{' '}
        <span class="italic font-normal text-base">
          (named after a cat we had)
        </span>
      </p>
    </div>
    <div class="mt-4 mb-10 max-w-3xl">
      <img
        class="mx-auto"
        src="../../assets/fat-kitten.png"
        alt="Fat Kitten Web Services Design"
      />
    </div>
  </div>
);

export default WhatNext;
