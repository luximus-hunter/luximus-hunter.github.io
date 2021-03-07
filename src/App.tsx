import './App.scss';

import About from './parts/About';
import Education from './parts/Education';
import Footer from './parts/Footer';
import Header from './parts/Header';
import Menu from './parts/Menu';
import lang from './util/lang';

function App() {
  lang.init();

  return (
    <div className='App'>
      <Header />
      <Menu />
      <About />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
