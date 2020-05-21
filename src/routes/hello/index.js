import { h } from 'preact';
import { Link } from 'preact-router/match';

const Hello = () => (
  <div class="text-center px-4 block">
    <h1 class="text-5xl text-gray-700 font-extrabold capitalize tracking-wide lg:text-6xl lg:tracking-wider">
      Hello
    </h1>
    <p class="text-sm md:text-base lg:text-xl">
      My name is <span class="border-b-4 border-teal-500">Stetson</span> and I'd
      like to work with you.
    </p>
    <p class="text-sm italic md:text-base lg:text-xl">
      Let me tell you a bit about myself.
    </p>
  </div>
);

export default Hello;
