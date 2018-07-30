// http://steavevaivai.hatenablog.com/entry/2017/03/25/065734

import _ from "lodash";
import cytoscape from "cytoscape";

console.log(_.map([1, 2, 3, 4, 5, 6, 7], a => a * a));
import data from "./data";

let elements = [];
//let relations = [];
data.forEach(node => {
  let newNode = {
    data: {
      id: node.id
    }
  };
  elements.push(newNode);

  if (node.parents) {
    node.parents.forEach(pid => {
      let newRelation = {
        data: {
          id: pid + "-" + node.id,
          source: pid,
          target: node.id
        }
      };
      elements.push(newRelation);
    });
  }
});

let cy = cytoscape({
  container: document.getElementById("cy"),
  elements: elements,
  style: [
    {
      selector: "node",
      style: {
        shape: "hexagon",
        "background-color": "red",
        label: "data(id)"
      }
    },
    {
      selector: "edge",
      style: {
        width: 3,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
        "source-endpoint": "70% 0%",
        "target-endpoint": "70% 0%"
      }
    }
  ]
});
// for (var i = 0; i < 99; i++) {
//   cy.add({
//     data: { id: "node" + i }
//   });
//   var source = "node" + i;
//   cy.add({
//     data: {
//       id: "edge" + i,
//       source: source,
//       target: i % 2 == 0 ? "a" : "b"
//     }
//   });
// }
const layout = cy.layout({
  //name: "grid"
});
layout.run();
