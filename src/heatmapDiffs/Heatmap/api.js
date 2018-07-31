const data = {
  chromosomes: require("../assets/chromosomes.json"),
  ploidy: require("../assets/ploidy.json"),
  normal: require("../assets/segs.json"),
  center: require("../assets/nsegs.json"),
  mode: require("../assets/mode.json")
};

export const getChromosomeData = () => data.chromosomes.data.chromosomes;

export const getModeData = () => data.mode.data.modeSegs;

export const getPloidyData = () => data.ploidy.data.segs;

export const getSegData = () => data.normal.data.segs;

export const getCenterData = () => data.center.data.segs;
