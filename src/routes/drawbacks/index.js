import { h } from 'preact';
import { Link } from 'preact-router/match';

const Drawbacks = () => (
  <div class="py-12 px-16 block">
    <h1 class="mb-5 text-3xl text-gray-700 font-extrabold capitalize tracking-wide sm:text-5xl lg:text-6xl lg:tracking-wider">
      What are some drawbacks
    </h1>
    <h2 class="pb-2 text-xl  leading-tight font-semibold text-gray-700 md:text-2xl">
      I'm not an expert developer or front-ender (yet)
    </h2>
    <p class="mb-4 text-sm italic md:text-base lg:text-xl">
      I completed a coding bootcamp in 2018 focused on React, and I learned a
      lot. Last year I bulit my first production site for my lighting company
      (I'll showcase on the next page).
    </p>
    <p class="mb-4 text-sm italic md:text-base lg:text-xl">
      Since selling my painting company last year, I've focused 85% of my time
      to learning JS and Frameworks and building stuff. I'm not a pro today, but
      I'm confident with daily practice and some guidance I can get there
      quickly.
    </p>
    <h2 class="pb-2 text-xl  leading-tight font-semibold text-gray-700 md:text-2xl">
      I still run our seasonal lighting company in Kansas City
    </h2>
    <p class="mb-4 text-sm italic md:text-base lg:text-xl">
      <span class="font-semibold">Full Disclosure: </span>My holiday lighting
      company's season runs October through December 10th. During that time from
      sun up to sun down my business partner and our team work as much as
      humanly possible (the more we do, the more money we make). I plan on doing
      the actual <span class="font-semibold">field work </span>myself for
      another 2 seasons and then taking the role of tech guy only (pipeline
      setup/selling/scheduling/billing).
    </p>
    <p class="mb-4 text-sm italic md:text-base lg:text-xl">
      I'm willing to use my vacation time for a portion of that but I could not
      be counted on to contribute for that time period.
    </p>
  </div>
);

export default Drawbacks;
