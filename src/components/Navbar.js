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
            {({ path }) => (
              <Link class="text-white" href={nextPage(path)}>
                Next &rarr;
              </Link>
            )}
          </Match>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
