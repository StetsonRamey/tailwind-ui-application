import { h } from 'preact';

const Footer = () => (
  <div class="bg-gray-800">
    <div class="py-6 flex items-center justify-center">
      <div>
        <img
          class="h-4"
          src="../assets/tailwindui-logo-on-dark.svg"
          alt="Tailwind UI Logo"
        />
      </div>
      <div class="text-white font-medium pl-2 -mt-1">+ Stetson = 🤷‍♂️</div>
    </div>
    <div class="text-gray-500 flex flex-col items-center pb-6">
      <a class="hover:text-teal-500" href="https://github.com/StetsonRamey">
        <svg
          class="fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>GitHub</title>
          <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
        </svg>
      </a>
      <a class="hover:text-teal-500 pt-2" href="tel:+1-307-214-5159">
        <svg
          class="fill-current w-3 h-3 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Phone</title>
          <path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"></path>
        </svg>
        <span class="pl-2">(307) 214-5159</span>
      </a>
      <a class="hover:text-teal-500 pt-2" href="mailto:stetson.ramey@gmail.com">
        <svg
          class="fill-current w-3 h-3 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Email</title>
          <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path>
        </svg>
        <span className="pl-2">stetson.ramey@gmail.com</span>
      </a>
    </div>
  </div>
);

export default Footer;
