import { treeConfig as prevConfig } from "../../config.js";

const config = {
  height: 1000,
  width: 500,

  clusterMinHeight: 3,
  clusterVerticalOffset: 5,
  depthSpacing: 20,
  thresholdMin: 20,

  nodeRadius: 3,
  nodeColor: "#b3b3b3",
  highlightColor: "#2e7aab",

  clusterColorGradient: ["#CECECE", "#CECECE"],

  horizontalBranchWidth: 1,
  verticalBranchWidth: 2,

  horizontalBranchColor: "#333333",
  verticalBranchColor: "#bfbfbf"
};

export default {
  ...config,
  clusterWidth: config.depthSpacing - config.nodeRadius
};
