import './style.scss';

import globals from '../../globals.json';
import json from '../../data/about.json';
import lang from '../../util/lang';

interface aboutData {
  title: string;
  content: string[];
}

export default () => {
  let data: aboutData | null = null;

  json.map((n) => {
    if (n.lang === lang.get()) {
      data = n;
    }
  });

  if (data === null) {
    json.map((n) => {
      if (n.lang === globals['default-lang']) {
        data = n;
      }
    });
  }

  if (data === null) {
    data = {
      title: '404, about not found.',
      content: [
        'no data was provided in the about.json file or was not available in the fallback language.',
        "If you're not the developer of this side, please contact them about this error."
      ]
    };
  }

  return (
    <section id='about'>
      <div>
        <h1>{data.title}</h1>
        {data.content.map((n, i) => (
          <p key={i}>{n}</p>
        ))}
      </div>
    </section>
  );
};
