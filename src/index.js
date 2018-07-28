// http://steavevaivai.hatenablog.com/entry/2017/03/25/065734

import _ from "lodash";
import cytoscape from "cytoscape";

console.log(_.map([1, 2, 3, 4, 5, 6, 7], a => a * a));

var cy = cytoscape({
  container: document.getElementById("cy"),
  elements: [
    { data: { id: "a" } },
    { data: { id: "b" } },
    { data: { id: "c" } },
    { data: { id: "d" } },
    { data: { id: "e" } },
    {
      data: {
        id: "ab",
        source: "a",
        target: "b",
        shape: "ellipse"
      }
    },
    {
      data: {
        id: "bc",
        source: "b",
        target: "c"
      }
    },
    {
      data: {
        id: "be",
        source: "b",
        target: "e"
      }
    },
    {
      data: {
        id: "cd",
        source: "c",
        target: "d"
      }
    },
    {
      data: {
        id: "ed",
        source: "e",
        target: "d"
      }
    }
  ],
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
  name: "grid"
});
layout.run();
