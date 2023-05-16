import DramaCover from "../assets/images/categories/coverphoto/drama-cat.png";
import CartoonCover from "../assets/images/categories/coverphoto/cartoon-cat-fr.png";
import DocumentryCover from "../assets/images/categories/coverphoto/documentar-cat.png";
import FilmCover from "../assets/images/categories/coverphoto/cinema-cat.png";


import DramaBackgroud from "../assets/images/categories/background/drama-back.jpg";
import CartoonBackgroud from "../assets/images/categories/background/carton-back.png";
import DocumentryBackgroud from "../assets/images/categories/background/drama-back.jpg";
import FilmBackgroud from "../assets/images/categories/background/film-back.png";


import MusicCover from "../assets/images/categories/coverphoto/music-cat.jpg";
import SongsCover from "../assets/images/categories/coverphoto/songs-cat.jpg";
import SFXCover from "../assets/images/categories/coverphoto/sfx-cat.jpg";

import MusicBackgroud from "../assets/images/categories/background/music-back.png";
import SongsBackgroud from "../assets/images/categories/background/song-back.png";
import SFXBackgroud from "../assets/images/categories/background/sfx-back.png";

export const socialLinkColors = {
  facebook: "#3B5998",
  twitter: "#1DA1F2",
  instagram: "#E12F67",
  youtube: "#CD201F",
};

export const MainColor = "#f15722";

export const DubbingCategories = [
  {
    id: 1,
    title: "Drama",
    imgCover: DramaCover,
    url: DramaBackgroud,
  },
  {
    id: 2,
    title: "Documentry",
    imgCover: DocumentryCover,
    url: DocumentryBackgroud,
  },
  {
    id: 3,
    title: "Carton",
    imgCover: CartoonCover,
    url: CartoonBackgroud,
  },
  {
    id: 4,
    title: "Film",
    imgCover: FilmCover,
    url: FilmBackgroud,
  },
];


export const ServiceCategories = [
    {
      id: 1,
      title: "Music",
      imgCover: MusicCover,
      url: MusicBackgroud,
    },
    {
      id: 2,
      title: "Songs",
      imgCover: SongsCover,
      url: SongsBackgroud,
    },
    {
      id: 3,
      title: "SFX",
      imgCover: SFXCover,
      url: SFXBackgroud,
    },
    
  ];
  