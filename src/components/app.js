import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Navbar from './Navbar';
import Footer from './Footer';
import Hello from '../routes/hello';
import About from '../routes/about';

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
          </Router>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
