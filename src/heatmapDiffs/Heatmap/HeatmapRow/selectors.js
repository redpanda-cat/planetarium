import config from "./config.js";

export const getAnnotationsX = chromPixelMapping => {
  const chromosomeX =
    chromPixelMapping["Y"]["width"] + chromPixelMapping["Y"]["x"];

  return chromosomeX + config["spacing"];
};
