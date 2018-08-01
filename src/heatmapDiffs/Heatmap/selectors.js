import { scalePoint } from "d3";
import config from "./config.js";

/**
 * Gets the total number of base pairs in chromosome ranges
 */
const getTotalBP = chromosomes =>
  chromosomes.reduce((sum, chrom) => sum + chrom.end - chrom.start + 1, 0);

/**
 * Gets base pair to pixel ratio
 */
export const getBPRatio = chromosomes => {
  const totalBP = getTotalBP(chromosomes);
  return Math.ceil(totalBP / config["contentWidth"]);
};

/**
 * Gets the chromosome to start pixel mapping
 */
export const getChromPixelMapping = chromosomes => {
  const bpRatio = getBPRatio(chromosomes);
  let xShift = 0;
  return chromosomes.reduce((map, chrom) => {
    const chromWidth = getChromWidth(chrom, bpRatio);

    const mapEntry = {
      x: xShift,
      width: chromWidth
    };

    xShift += chromWidth;

    return {
      ...map,
      [chrom.id]: mapEntry
    };
  }, {});
};

/**
 * Returns the width (in pixels) for chromosome
 * @param {object} chrom - data
 * @param {int} bpRatio
 * @return {int}
 */
const getChromWidth = (chrom, bpRatio) =>
  Math.floor((chrom.end - chrom.start + 1) / bpRatio);

/**
 * Gets the heatmap (index) to pixel y scale
 */
export const getYScale = (indices, rowHeight) =>
  scalePoint()
    .domain(indices)
    .range([0, indices.length * rowHeight]);
