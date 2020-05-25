import { h } from 'preact';
import { Link } from 'preact-router/match';

const Doing = () => (
  <div class="py-12 px-12">
    <h1 class="mb-5 text-3xl text-gray-700 font-extrabold capitalize tracking-wide sm:text-5xl lg:text-6xl lg:tracking-wider">
      What I've done since 2015
    </h1>
    <div>
      <p class="mb-3 text-lg leading-tight font-semibold text-gray-700 md:text-3xl">
        Started{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="text-teal-500 underline hover:text-teal-700"
          href="https://greatplainspaintingkc.com/"
        >
          Great Plains Painting
        </a>{' '}
      </p>
      <div class="pl-3 text-sm italic md:text-lg">
        <p class="mb-2">- sold in 2019</p>
        <p class="mb-2">
          - did not build this site myself, went through many agencies
        </p>
        <p class="mb-2">
          - this is the reason I got interested in web development
        </p>
      </div>
    </div>
    <div class="mt-4 mb-10 max-w-3xl">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://greatplainspaintingkc.com/"
      >
        <img src="../../assets/gpp.png" alt="Great Plains Painting" />
      </a>
    </div>
    <div>
      <p class="mb-3 text-lg leading-tight font-semibold text-gray-700 md:text-3xl">
        Started{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="text-teal-500 underline hover:text-teal-700"
          href="https://tistheseasonkc.com/"
        >
          'Tis the Season Holiday Lighting'
        </a>{' '}
      </p>
      <div class="pl-3 text-sm italic md:text-lg">
        <p class="mb-2">- built this site myself last year</p>
      </div>
    </div>
    <div class="mt-4 max-w-3xl">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://tistheseasonkc.com/"
      >
        <img src="../../assets/tts.png" alt="Tis the Season Holiday Lighting" />
      </a>
    </div>
  </div>
);

export default Doing;
