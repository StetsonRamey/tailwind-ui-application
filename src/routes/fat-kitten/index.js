import { h } from 'preact';

const FatKitten = () => (
  <div class="py-12 px-6 lg:flex">
    <div class="mt-4 mb-10 mx-auto max-w-3xl lg:w-8/12 xl:w-6/12">
      <img
        src="../../assets/figma-fat-kitten.png"
        alt="Fat Kitten Web Services Design"
      />
    </div>
    <div class="lg:w-4/12 lg:pt-20 lg:pl-6 xl:w-6/12 xl:pl-4 xl:text-left">
      <p class="mb-3 text-lg leading-tight font-semibold text-gray-700 md:text-3xl lg:text-xl">
        Started building the business site a couple months ago
      </p>
      <div class="pl-3 mb-4 text-sm italic md:text-lg lg:text-sm">
        <p class="mb-2">
          - designed in Figma (
          <a
            class="text-teal-500 hover:text-teal-700 underline"
            href="https://www.figma.com/file/oC8IEGBI8l6dHIEz57UQMh/new-biz-site?node-id=21%3A0"
          >
            check it out
          </a>
          )
        </p>
        <p class="mb-2">
          - knew it'd be static and considered Next/Nuxt/Gatsby/Sapper. Ended up
          on Preact as the others seemed like overkill for what I was after.
          Preact CLI does most of what I want (pre-render/static/PWA type stuff)
          out of the box and it's a tiny library. Preact + Tailwind = ❤️
        </p>
        <p class="mb-3">
          - I planned to build the site and then hit up my network of people I
          know who run companies and see if I could get a few clients to start a
          portfolio and work out the bugs
        </p>
        <p class="mb-3 font-bold text-xl md:text-2xl lg:text-xl text-indigo-500">
          - Then I saw your TailwindUI Job Posting and my plans changed
        </p>
      </div>
    </div>
  </div>
);

export default FatKitten;
