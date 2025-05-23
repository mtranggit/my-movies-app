// Define interfaces for the movie data structure
export interface PosterArt {
  url: string;
  width: number;
  height: number;
}

export type ProgramType = "series" | "movie";

export interface MovieEntry {
  title: string;
  description: string;
  programType: ProgramType;
  images: {
    "Poster Art": PosterArt;
  };
  releaseYear: number;
}

export interface MoviesData {
  total: number;
  entries: MovieEntry[];
}

export const programTitleMap: Record<ProgramType, string> = {
  series: "Series",
  movie: "Movies",
};

export const programTypeList = Object.keys(programTitleMap) as ProgramType[];

export const sampleMovies: MoviesData = {
  total: 75,
  entries: [
    {
      title: "Rake",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2010,
    },
    {
      title: "30 Rock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/532/30/53230-PosterArt-df844c976b27c518d83c2707e79b4685.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2006,
    },
    {
      title: "The Resort",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/885/68/88568-PosterArt-a988d5aa0090e892f9015dd5ad17c0ac.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "Wonder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/165/9396/1659396-PosterArt-14385926f542bb6cb6c1fc84d907a9b2.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2017,
    },
    {
      title: "3:10 to Yuma",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/293/8294/2938294-PosterArt-3138b2ec41be4d8837f5e34b747412ee.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2007,
    },
    {
      title: "Self/less",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/103/5943/1035943-PosterArt-abb0a86a7b981aad0e1bcd9a85262bac.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "U-571",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/336/796/336796-PosterArt-49b0da4aec21ac37938461d4e8fecc29.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2000,
    },
    {
      title: "Mad Max (1979)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/311/242/311242-PosterArt-2d36a8b3f5627210797c67c6c3af7d81.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 1979,
    },
    {
      title: "Chéri",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/332/2996/3322996-PosterArt-f18af2e22ff35815cea1211e0cabbd75.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2009,
    },
    {
      title: "Joker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/325/1439/3251439-PosterArt-95a375f4a3bcd99e59ccfcf449a43713.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2019,
    },
    {
      title: "Eagle vs Shark",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/135/2240/1352240-PosterArt-e6a8b449b3441e7319196ab70fbc0ef1.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2007,
    },
    {
      title: "21 Bridges",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/325/1445/3251445-PosterArt-d9fc5243f3c1c95ca18522a5511773bd.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2019,
    },
    {
      title: "John Wick",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/376/201/376201-PosterArt-387b78d039424718aa182dfc20567cbc.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2014,
    },
    {
      title: "Blade Runner 2049",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/382/2428/3822428-PosterArt-ab21a9b3753a0cc071e6a9ad725426a6.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2017,
    },
    {
      title: "Mad Max: Fury Road",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/958/725/958725-PosterArt-9c8a794585ccec6a2528eb23d07039ab.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "Top Gun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/974/709/974709-PosterArt-6dec3c8dd92a1620798d5392edd44994.jpeg",
          width: 2000,
          height: 3000,
        },
      },
      releaseYear: 1986,
    },
    {
      title: "Grease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/233/4424/2334424-PosterArt-a4687c97159b02c1a045d8f4c02dbcd6.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 1978,
    },
    {
      title: "YOLO: Crystal Fantasy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/758/04/75804-PosterArt-0dcd11a117ade322980ac6d2d45b2671.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2020,
    },
    {
      title: "Hacks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/688/19/68819-PosterArt-897ba2a979ed0d3086d44ce8ef9db4d5.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "Billy the Kid",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/746/24/74624-PosterArt-e3b46579f681f4b0df49f090f1655bf8.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "Gaslit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/743/80/74380-PosterArt-143f278696c77786e28406e447dadd15.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "The Lazarus Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/747/83/74783-PosterArt-393e0849c38e3b0241c889c3188785d3.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "Dr. Death",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "12 Strong",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/171/7585/1717585-PosterArt-8d55e1b9d42678758526046725bc2373.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2018,
    },
    {
      title: "Top Gear",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/098/3/983-PosterArt-3cab4f275af6ac3f479170b7bfeb3571.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2013,
    },
    {
      title: "I, Tonya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/165/9388/1659388-PosterArt-210ba8a68c6475d46ce2e58cd3f28b43.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2017,
    },
    {
      title: "The Wolf of Wall Street",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/376/179/376179-PosterArt-ff532371990d26b43e6e627489a9b745.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2014,
    },
    {
      title: "Entourage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/343/1149/3431149-PosterArt-2f754070d923ffcc96351cd1e45ac5ad.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "RuPaul's Drag Race Down Under",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/652/46/65246-PosterArt-5213e2cc483edf1c45daa8a908b57bd8.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "Chicken Run",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/390/612/390612-PosterArt-1da1d97fd62b738ca3877c9cfef84099.jpeg",
          width: 2000,
          height: 3000,
        },
      },
      releaseYear: 2000,
    },
    {
      title: "The Octonauts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/163/6/1636-PosterArt-7153df5acf36740c9525cfae3d1ba76e.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2010,
    },
    {
      title: "The Lego Movie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/376/182/376182-PosterArt-cef1a8939034206e0f6c641329b43dd8.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2014,
    },
    {
      title: "Elf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/311/185/311185-PosterArt-11f7b57f3a94d52b2d79c0ed48d6cdb8.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2003,
    },
    {
      title: "Ben 10",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/179/88/17988-PosterArt-585225a6c939bf36b3b37e63722148ce.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2016,
    },
    {
      title: "Hey Duggee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/125/42/12542-PosterArt-483de62e33330f27c136e1e3040784ee.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "UnREAL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/939/3/9393-PosterArt-732dc6a89b58638a3595c7f2d364d70e.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "Station Eleven",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/720/49/72049-PosterArt-1b1cacea64ccd0e54be674e943bcfa01.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "Girls5eva",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/659/83/65983-PosterArt-7998afd02238a66f3c6fd5fc9390d925.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "Gangs of London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/605/57/60557-PosterArt-20be6658f55737ee362c078406efcabd.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2020,
    },
    {
      title: "11.22.63",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/120/40/12040-PosterArt-e869324b85b23a43c4ca0373aa6ffe07.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2016,
    },
    {
      title: "Yellowstone",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/515/43/51543-PosterArt-37feec6e8afde635c4d23a3d1ab2166f.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2019,
    },
    {
      title: "Show Me The Money",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/743/49/74349-PosterArt-7dd2548842138094f152170b049f24c6.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "Christmas On The Farm",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/316/0508/3160508-PosterArt-5f216b9fb34d4103db711f6ffb281199.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "No Activity: The Night Before Christmas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/175/4197/1754197-PosterArt-7cb490b3ccb510674478a1482a3ccdd0.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2018,
    },
    {
      title: "Philip K. Dick's Electric Dreams",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/211/25/21125-PosterArt-85dd742c3bb818734d2c062770500467.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2017,
    },
    {
      title: "Power Book IV: Force",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/722/38/72238-PosterArt-d6f34014023979d0018ec5d677c7d900.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "True History of the Kelly Gang",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/233/6377/2336377-PosterArt-992443b1a42beecfd3110d7186f3aceb.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2019,
    },
    {
      title: "Relic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/265/8312/2658312-PosterArt-50b313fef35693760f0f06490fc4dbb1.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2020,
    },
    {
      title: "I Am Woman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/274/4550/2744550-PosterArt-22492df09a40923e3618e96dd63ffaa6.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2019,
    },
    {
      title: "The Second",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/166/0028/1660028-PosterArt-8824ed955097bceef65903c9805565dd.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2018,
    },
    {
      title: "Power Book III: Raising Kanan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/675/17/67517-PosterArt-19fd38b47bf18ffa9b6d3eae18cbdb2b.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "The Other Guy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/201/35/20135-PosterArt-a1be114abcb955199da0db6d0bf72a3c.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2017,
    },
    {
      title: "No Activity (U.S.)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/220/31/22031-PosterArt-55c5635946bd7fa4c36507e726bcc8f0.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2017,
    },
    {
      title: "Power Book II: Ghost",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/556/79/55679-PosterArt-886732eb1559c985be24ff87360dfbbf.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2020,
    },
    {
      title: "The Commons",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/515/23/51523-PosterArt-21e183c670cb76d993da0b926286906f.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2019,
    },
    {
      title: "The Gloaming",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/516/16/51616-PosterArt-426a0f095d54e36857e8784b8a285354.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2020,
    },
    {
      title: "Bloom",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/271/11/27111-PosterArt-563296728464afefc99139fb2272fffc.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2019,
    },
    {
      title: "Power",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/512/1/5121-PosterArt-914fd0a74dea15617fb585b255201330.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2014,
    },
    {
      title: "iZombie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/197/5/1975-PosterArt-48957303fe212dbe9720b346d2dc1e41.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "Better Call Saul",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-669110feef2c5f2c01b5d0d1a72bb844.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "Eden",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/645/19/64519-PosterArt-8d652de27566e160b1a4d46669552ad3.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "Dom And Adrian 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/636/31/63631-PosterArt-851c71e202cbb9bf8535d00603e91cc7.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2020,
    },
    {
      title: "Wolf Like Me",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/727/00/72700-PosterArt-2f6347e6fac09cc4b9b850f98ec8184c.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "The Tourist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/728/90/72890-PosterArt-f0838fede23f7ba16622c0b846f92d86.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "Gold",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "movie",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/319/6866/3196866-PosterArt-cd4933f526fda95c693973da2815bd38.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2022,
    },
    {
      title: "Bump",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/629/08/62908-PosterArt-287f8a91e0e36c2ca552618d510b72ad.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2021,
    },
    {
      title: "Wolf Creek",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-7a3a28e2bea10ff9ea0f47023b7293c6.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2016,
    },
    {
      title: "No Activity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-417e5c1c009d203881a6742f94e8c027.jpeg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "Billions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-5b5a494fea455b3b0a582ef13b85f24e.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2016,
    },
  ],
};
