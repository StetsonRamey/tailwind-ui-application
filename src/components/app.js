import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Navbar from './Navbar';
import Footer from './Footer';
import Hello from '../routes/hello';
import About from '../routes/about';
import WhyGood from '../routes/why-i-good';
import Drawbacks from '../routes/drawbacks';
import Doing from "../routes/what-i've-been-doing";

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div class="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main class="flex-grow flex items-center justify-center">
          <Router onChange={this.handleRoute}>
            <Hello path="/" />
            <About path="/about/" />
            <WhyGood path="/why-i'm-a-good-candidate/" />
            <Drawbacks path="/what-are-some-drawbacks/" />
            <Doing path="/what-i've-done/" />
          </Router>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
