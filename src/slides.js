import IntroSlides from "./intro/index.js";
import TreeSlides from "./tree/index.js";
import HeatmapSlides from "./heatmapDiffs/index.js";
import DemoSlide from "./common/demo.js";
import OutroSlides from "./outro/index.js";

const slides = [
  ...IntroSlides,
  ...TreeSlides,
  ...HeatmapSlides,
  DemoSlide,
  ...OutroSlides
];

export default slides;
