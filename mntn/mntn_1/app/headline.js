import React from 'react';
import SouthIcon from '@mui/icons-material/South';
import "./headline.css";

const Headline = () => {
  return (
    <>
      <div className="group">
      <div className="rectangle" />
        <div className="a-hiking-guide">A HIKING GUIDE</div>
      </div>
      <p className="be-prepared-for-the old">Be Prepared For The Mountains And Beyond!</p>
      <div className="div-header">
     
        <div className="scroll-down">scroll down
            <SouthIcon className="arrow-down-icon" label="scroll" />       
         </div>
      
      </div>
      </>
  );
};

export default Headline;


