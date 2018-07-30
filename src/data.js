const data = [];
data.push({
  id: "node01"
});
data.push({
  id: "node02",
  parents: ["node01"]
});
data.push({
  id: "node03",
  parents: ["node01"]
});
data.push({
  id: "node04",
  parents: ["node02"]
});
data.push({
  id: "node05",
  parents: ["node02"]
});
data.push({
  id: "node06",
  parents: ["node03"]
});
data.push({
  id: "node07",
  parents: ["node04", "node05", "node06"]
});
data.push({
  id: "node08",
  parents: ["node05", "node06"]
});
data.push({
  id: "node09",
  parents: ["node07", "node08"]
});

export default data;
