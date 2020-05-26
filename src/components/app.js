import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Navbar from './Navbar';
import Footer from './Footer';
import Hello from '../routes/hello';
import About from '../routes/about';
import WhyGood from '../routes/why-i-good';
import Drawbacks from '../routes/drawbacks';
import Doing from "../routes/what-i've-been-doing";
import Gpp from '../routes/great-plains-painting';
import Tts from '../routes/tis-the-season';
import WhatNext from '../routes/what-next';
import FatKitten from '../routes/fat-kitten';
import Fit from "../routes/why-we're-a-good-fit";
import Pitch1 from '../routes/pitch-1';
import Pitch2 from '../routes/pitch-2';

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
            <Gpp path="/gpp/" />
            <Tts path="/tts/" />
            <WhatNext path="/what's-next/" />
            <FatKitten path="/fat-kitten/" />
            <Fit path="/why-we're-a-good-fit/" />
            <Pitch1 path="/pitch-1/" />
            <Pitch2 path="/pitch-2/" />
          </Router>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
