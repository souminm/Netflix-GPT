export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_LOGO = "https://avatars.githubusercontent.com/u/58057844?v=4";
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const NETFLIX_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " +process.env.REACT_APP_TMDB_KEY,
  },
};

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier:"hindi",
    name:"Hindi"
  },
  {
    identifier:"spanish",
    name:"Spanish"
  },

];

export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY;
