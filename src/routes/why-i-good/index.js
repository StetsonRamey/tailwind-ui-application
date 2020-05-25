import { h } from 'preact';
import { Link } from 'preact-router/match';

const WhyGood = () => (
  <div class="py-12 px-16 block">
    <h1 class="mb-5 text-3xl text-gray-700 font-extrabold capitalize tracking-wide sm:text-5xl lg:text-6xl lg:tracking-wider">
      Why I'm a good candidate
    </h1>
    <h2 class="pb-2 text-xl leading-tight font-semibold text-gray-700 md:text-2xl">
      I've built a couple companies myself
    </h2>
    <p class="mb-4 text-sm italic md:text-base lg:text-xl">
      My girlfriend and I have supported ourselves for 5 years working for no
      one other than ourselves and we've loved it. I know how to manage my time
      and I hold myself accountable for getting things done.
    </p>
    <h2 class="pb-2 text-xl  leading-tight font-semibold text-gray-700 md:text-2xl">
      I learn quickly
    </h2>
    <p class="mb-4 text-sm italic md:text-base lg:text-xl">
      Solving problems is essential. I knew nothing about painting, running a
      company, marketing, sales, or hiring when I started. I had to learn and
      learn quickly.
    </p>
    <h2 class="pb-2 text-xl  leading-tight font-semibold text-gray-700 md:text-2xl">
      I'm reliable
    </h2>
    <p class="text-sm italic md:text-base lg:text-xl">
      In my experience, employees can be tough to manage. If you have me do
      something, I'll make sure it gets done and if I can't do it on my own,
      I'll be communicating with you about it right away.
    </p>
  </div>
);

export default WhyGood;
