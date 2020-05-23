import { h } from 'preact';

const Tts = () => (
  <div class="px-8 py-10">
    <div>
      <h1 class="text-3xl font-semibold tracking-wide pb-4">
        'Tis the Season Holiday Lighting
      </h1>
      <p class="pb-2 mb-4 border-b-2 border-gray-400 md:text-xl">
        Started super ghetto, as a test to see how cheaply and quickly I could
        set up a company
        <div class="pl-3 mt-2 text-sm font-light italic md:text-lg">
          <p class="mb-2">
            - didn't know how to code, so first website was a VistaPrint website
            builder one -- AWFUL SEO
          </p>
          <p class="mb-2">
            - we had 22 customers year 1, which was enough to make a little
            money and proof of concept
          </p>
        </div>
      </p>
      <p class="pb-2 mb-4 border-b-2 border-gray-400 md:text-xl">
        I learned to code a little and built the current site last year
        <div class="pl-3 mt-2 text-sm font-light italic md:text-lg">
          <p class="mb-2">
            - decided against a framework and used HTML, SCSS, and JS. I figured
            I'd try the old school way and maybe I'd understand what issues
            frameworks solved
          </p>
          <p class="mb-2">
            - hosted as static site on Netlify with a Netlify form
          </p>
          <p class="mb-2">
            - ranked great really quickly for our keywords. Pulled in 300+ leads
            last year (we closed about 50%)
          </p>
          <p class="mb-2">
            -{' '}
            <a
              class="text-teal-500 underline hover:text-teal-700"
              href="https://github.com/StetsonRamey/Tis-the-Season-Site"
            >
              code here
            </a>
          </p>
        </div>
      </p>
      <p class="pb-2 mb-4 border-b-2 border-gray-400 md:text-xl">
        Excellent business - turns out holiday lighting grows quickly
        <div class="pl-3 mt-2 text-sm font-light italic md:text-lg">
          <p class="mb-2">
            - year 1 | 22 customers | partner and I paid ourselves $2k/ea
          </p>
          <p class="mb-2">- year 2 | 80 customers | $8k/ea</p>
          <p class="mb-2">- year 3 | 172 customers | $22k/ea</p>
          <p class="mb-2">
            - year 4 | ~300 customers | $43k/ea | 2 hires to help install
          </p>
          <p class="mb-2">- season is October - December 10th-ish</p>
          <p class="mb-2">
            - have most everything automated, but hacked together with
            zapier/google sheets/mailchimp/simpletexting
          </p>
          <p class="mb-2">
            - would like to build my own backend to manage customers
          </p>
        </div>
      </p>
    </div>
    <div>
      <p className="italic text-sm">
        This is where I started to see the power in being able to hack and build
        with tech. My belief, learning how to code well is{' '}
        <span class="text-teal-600 font-semibold">extremely</span> valuable, is
        validated.
      </p>
    </div>
  </div>
);

export default Tts;
