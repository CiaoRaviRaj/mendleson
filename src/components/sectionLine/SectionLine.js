import React from "react";

import "./SectionLine.css";

function SectionLine({ width }) {
  return (
    <div className="section_line">
      <div className="section_line_thine">

      </div>

      <div className="section_line_thick" style={{ width: `${width}px`}}>
        
      </div>
    </div>
  );
}

export default SectionLine;
