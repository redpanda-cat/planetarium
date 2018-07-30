const jsonData = require("../assets/data.json");
const data = jsonData.data.allNodes;

export const getRootData = () => data[0];
export const getNodeData = index => data[index];
