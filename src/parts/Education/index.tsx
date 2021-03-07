import './style.scss';

import Card from '../../components/Card';
import globals from '../../globals.json';
import json from '../../data/education.json';
import lang from '../../util/lang';

interface educationData {
  content: string[];
  date: {
    from: string;
    till: string;
  };
  location: string;
  logo: string;
  title: string;
}

export default () => {
  let data: educationData[] = [];

  json.map((n) => {
    n.map((m) => {
      if (m.lang === lang.get()) {
        data.push(m);
      }
    });
  });

  if (data.length < json.length) {
    data = [];

    json.map((n) => {
      n.map((m) => {
        if (m.lang === globals['default-lang']) {
          data.push(m);
        }
      });
    });
  }

  if (data.length < json.length) {
    data = [];
    console.error('yeet');
  }

  return (
    <section id='education'>
      <h1 className='title'>Education</h1>
      {data.map((n, i) => (
        <Card key={i} side={i % 2 === 0 ? 'left' : 'right'} img={n.logo}>
          <div>
            <img alt={n.title + '-logo'} src={n.logo} className='education-img' />
            <h1>{n.title}</h1>
            <h2>
              {n.date.from} - {n.date.till}
            </h2>
            {n.content.map((m, j) => (
              <p key={j}>{m}</p>
            ))}
          </div>
        </Card>
      ))}
    </section>
  );
};
