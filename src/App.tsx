import './App.scss';

import About from './parts/About';
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
      <Footer />
    </div>
  );
}

export default App;
