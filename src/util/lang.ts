const setLang = () => {
  let language = navigator.language;

  document.cookie = 'lang=' + language;
};

const getLang = () => {
  let name = 'lang=';

  let cookies = decodeURIComponent(document.cookie).split(';');

  for (var i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return '';
};

const initLang = () => {
  if (getLang() === '') {
    setLang();
  }
};

const lang = {
  get: getLang,
  set: setLang,
  init: initLang
};

export default lang;
