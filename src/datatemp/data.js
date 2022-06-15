// web project assets
import bundleGif from "../assets/web/01-BUNDLE.gif";
import actorsGif from "../assets/web/02-52711-Actors.gif";
import baboonGif from "../assets/web/03-Baboon-Interactive-Model.gif";
import baboonThumbnail from "../assets/web/03-Baboon-Interactive-thumbnail.gif";
import petroleumscapeGif from "../assets/web/04-American-Petroleumscape.gif";

const web = [
  {
    id: 1,
    title: "CAPE TOWN BABOON INTERACTIVE",
    subtitle: "Animated Interactive 3D Web App built with Three.js and Blender",
    image: baboonGif,
    thumbnail: baboonThumbnail,
    description: "Interactive topographic model of Cape Town with animated baboons simulating the bahaviors of the baboon troops in the city. A predictive model of baboon troops is created based on behavioral algorithms (patch selection model), which becomes the basis for the interactive model.", 
    school: "Columbia University",
    year: 2022,
    url: "https://taka-2628.github.io/NoMoreMonkeyBusiness",
    github: "https://github.com/taka-2628/NoMoreMonkeyBusiness",
    tags: ["web", "data visualization"]
  },
  {
    id: 2,
    title: "AMERICAN PETROLEUMSCAPE",
    subtitle: "Interactive Archive of Satelite Images of 155 Oil Refineries in America",
    image: petroleumscapeGif,
    thumbnail: petroleumscapeGif,
    description: "AMERICAN PETROLEUMSCAPE is developed as a part of a design/research project, which investigates the environmental and health issues around oil refineries. The archive contains satellite images of all of 155 oil refineries in the United States.",
    school: "Columbia University",
    year: 2022,
    url: "https://taka-2628.github.io/coding-for-spatial-practices/project-03/",
    github: "https://github.com/taka-2628/coding-for-spatial-practices/project-03/",
    tags: ["web"]
  },
  {
    id: 3,
    title: "BUNDLE",
    subtitle: "Single-page Application with Vanilla JavaScript and JSON-server on Heroku",
    image: bundleGif,
    thumbnail: bundleGif,
    description: " BUNDLE is a simple portfolio aggregator/tracker for stock and crypto investors. It fetches real-time price data from APIs and calculates the total value and unrealized gain/loss of a portfolio.",
    school: "Flatiron School",
    year: 2021,
    url: "https://taka-2628.github.io/BUNDLE/",
    github: "https://github.com/taka-2628/BUNDLE",
    tags: ["web"]
  },
  {
    id: 4,
    title: "LIFE AND DEATH OF 52,711 ACTORS",
    subtitle: "Data Visualization with D3.js and Mapbox API",
    image: actorsGif,
    thumbnail: actorsGif,
    description: "Data Visualization project that explores the correlation between the main genre of an actor and his or her maridge, divorce and cause of death. Are romance actors happily married? Do actors of the same genre die of the same cause?",
    school: "Columbia University",
    year: 2021,
    url: "https://taka-2628.github.io/52711_ACTORS/",
    github: "https://github.com/taka-2628/52711_ACTORS",
  }
]

export { web }