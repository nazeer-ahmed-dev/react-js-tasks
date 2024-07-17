import React from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "./helpers";

import orgChartJson from "./data/names.json";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <circle r="10" onClick={toggleNode} />
    <text fill="black" strokeWidth="1" x="20">
      {nodeDatum.name}
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function OrgChart() {
  const [translate, containerRef] = useCenteredTree();
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={orgChartJson}
        translate={translate}
        renderCustomNodeElement={renderRectSvgNode}
        orientation="vertical"
      />
    </div>
  );
}
