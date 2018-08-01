import { scaleOrdinal, scaleLinear } from "d3";

const COLORS = [
  "#2e7aab",
  "#9ECAE1",
  "#CCCCCC",
  "#FDCC8A",
  "#FC8D59",
  "#E34A33",
  "#B30000",
  "#980043",
  "#DD1C77",
  "#DF65B0",
  "#C994C7",
  "#D4B9DA"
];

const CONSTANTS = {
  stateScale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  stateColors: COLORS,
  ploidyColors: ["#073757", ...COLORS, "#fae2ff"],
  ploidyScale: [-12, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12],
  width: 850,
  height: 1200,
  heatmapChromHeight: 12
};

const config = {
  width: CONSTANTS["width"],
  height: CONSTANTS["height"],
  rowHeight: 5,
  colorScale: scaleOrdinal()
    .domain(CONSTANTS.stateScale) // state
    .range(CONSTANTS.stateColors),
  ploidyColorScale: scaleLinear()
    .domain(CONSTANTS.ploidyScale) // state
    .range(CONSTANTS.ploidyColors),
  chromosome: {
    height: CONSTANTS["heatmapChromHeight"],
    color: ["#faf9f9", "#e6e6e6"]
  },
  spacing: 2
};

export default {
  ...config,
  annotationRadius: config["rowHeight"] / 2,
  contentWidth: CONSTANTS["width"] - config["rowHeight"],
  contentHeight: CONSTANTS["height"] - CONSTANTS["heatmapChromHeight"]
};
