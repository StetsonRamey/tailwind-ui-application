import { h } from 'preact';
import { Link } from 'preact-router/match';

const About = () => (
  <div class="px-8 py-10">
    <div class="">
      <img
        class="mx-auto h-64 border rounded-lg"
        src="../../assets/stetson.jpg"
        alt="Stetson Headshot"
      />
    </div>
    <div class="pt-10">
      <h1 class="text-3xl font-semibold tracking-wide pb-4">
        A little about me&hellip;
      </h1>
      <p class="pb-2 mb-4 border-b-2 border-gray-400">
        🎓 Masters Degree in Civil Engineering
      </p>
      <p class="pb-1">
        📐 Construction engineer for{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="text-teal-500 underline"
          href="https://www.kiewit.com/markets/power"
        >
          Kiewit
        </a>{' '}
        managing work on power plant projects
      </p>
      <p className="text-sm italic text-indigo-800 pb-2 mb-4 border-b-2 border-gray-400">
        decided that wasn't for me
      </p>
      <p>🧮 Staff engineer for a consulting firm in LA</p>
      <p className="text-sm italic text-indigo-800 pb-2 mb-4 border-b-2 border-gray-400">
        the consultant sent me to all Kiewit's big bridge jobs in Canada...still
        not for me
      </p>
      <p class="pb-1">🤔 Began thinking about starting my own company</p>
      <p className="text-sm italic text-indigo-800 pb-2">
        🏋️ helped my friend build his new gym from 0 to ~200 monthly members
      </p>
      <p className="text-sm italic text-indigo-800 pb-2">
        🖌 started a painting company and sold it 4 years later
      </p>
      <p className="text-sm italic text-indigo-800 pb-2 mb-4 border-b-2 border-gray-400">
        💡 started a holiday lighting company
      </p>
      <p class="">
        👨‍💻 Completed a{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="text-teal-500 underline"
          href="https://bootcamp.ku.edu/coding/"
        >
          coding bootcamp
        </a>{' '}
        focused on JS/React/SQL/Mongo/Express in 2018
      </p>
    </div>
  </div>
);

export default About;
