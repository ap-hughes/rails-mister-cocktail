import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Like Negroni?", "You've come to the right place..."],
    typeSpeed: 40,
    loop: true
  });
}

export { loadDynamicBannerText };
