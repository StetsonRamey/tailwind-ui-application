import { h } from 'preact';
import { Link, Match } from 'preact-router/match';

const Navbar = () => {
  function nextPage(path) {
    switch (path) {
      case '/':
        return '/about';
      case '/about':
        return "/why-i'm-a-good-candidate/";
      case "/why-i'm-a-good-candidate/":
        return '/what-are-some-drawbacks/';
      case '/what-are-some-drawbacks/':
        return "/what-i've-done/";
      case "/what-i've-done/":
        return '/gpp/';
      case '/gpp/':
        return '/tts/';
      case '/tts/':
        return "/what's-next/";
      case "/what's-next/":
        return '/fat-kitten/';
      case '/fat-kitten/':
        return '/pitch-1/';
      case '/pitch-1/':
        return '/pitch-2/';
    }
  }
  function prevPage(path) {
    switch (path) {
      case '/about':
        return '/';
      case "/why-i'm-a-good-candidate/":
        return '/about';
      case '/what-are-some-drawbacks/':
        return "/why-i'm-a-good-candidate/";
      case "/what-i've-done/":
        return '/what-are-some-drawbacks/';
      case '/gpp/':
        return "/what-i've-done/";
      case '/tts/':
        return '/gpp/';
      case "/what's-next/":
        return '/tts/';
      case '/fat-kitten/':
        return "/what's-next/";
      case '/pitch-1/':
        return '/fat-kitten/';
      case '/pitch-2/':
        return '/pitch-1/';
    }
  }

  return (
    <header class="bg-teal-500">
      <nav class="flex items-center justify-between px-4 py-3">
        <div>
          <Match path="/">
            {({ path }) =>
              path !== '/' && (
                <Link class="text-white" href={prevPage(path)}>
                  &larr; Prev
                </Link>
              )
            }
          </Match>
        </div>
        <div>
          <Match path="/">
            {({ path }) =>
              (path === '/pitch-1/' && (
                <Link class="text-white" href={nextPage(path)}>
                  Last Page &rarr;
                </Link>
              )) ||
              (path !== '/pitch-1/' && path !== '/pitch-2/' && (
                <Link class="text-white" href={nextPage(path)}>
                  Next &rarr;
                </Link>
              )) ||
              (path === '/pitch-2/' && <p class="text-white">🖐 we done</p>)
            }
          </Match>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
