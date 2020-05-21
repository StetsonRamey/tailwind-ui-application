import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => setToggle(!toggle);

  return (
    <header class="bg-teal-500">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="">
          <Link class="text-white" href="/">
            &larr; Prev
          </Link>
        </div>
        <div class="">
          <Link class="text-white" href="/about">
            Next &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
