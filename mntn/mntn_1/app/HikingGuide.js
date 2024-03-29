import React from "react";
import PropTypes from "prop-types";
// import { ArrowDownward24Px } from "./ArrowDownward24Px";
import "./css/HikingGuide.css";

const Content = ({ equipmentNumber, taglineText, hikerLevel, description, readMoreText, imageSrc }) => {
    
    
    {/*here we take the equipmentNumber to see where the image should go // thanks chatgpt:D*/}
    const isEven = parseInt(Number(equipmentNumber,10)) % 2 === 0;

    return (
        <div className="content">
            <div className="overlap-group">
                {/*If the equipment number is even, the image will be on the left side of the content // thanks copilot:D*/}
                {isEven ? ( 
                    <>
                    {/*If the equipment number is even, the image will be on the left side of the content*/}
                        <img className="element_left" alt="Element" src={imageSrc} />
                        <div className="equipment_left">{equipmentNumber}</div>
                        <div className="div_left">
                            <div className="tagline">
                                <div className="get-started">{taglineText}</div>
                                <div className="line" />
                            </div>
                            <p className="what-level-of-hiker">{hikerLevel}</p>
                            <p className="text-wrapper">{description}</p>
                            <div className="more">
                                <div className="equipment-2">{readMoreText}</div>
                                {/* <ArrowDownward24Px className="icon-navigation" /> */}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                    {/*If the equipment number is odd, the image will be on the right side of the content*/}
                    <img className="element" alt="Element" src={imageSrc} />
                      <div className="equipment">{equipmentNumber}</div>
                        <div className="div">
                            <div className="tagline">
                                <div className="get-started">{taglineText}</div>
                                <div className="line" />
                            </div>
                            <p className="what-level-of-hiker">{hikerLevel}</p>
                            <p className="text-wrapper">{description}</p>
                            <div className="more">
                                <div className="equipment-2">{readMoreText}</div>
                                {/* <ArrowDownward24Px className="icon-navigation" /> */}
                            </div>
                        </div>
                        
                    </>
                )}
            </div>
        </div>
    );
};

Content.propTypes = {
    equipmentNumber: PropTypes.string.isRequired,
    taglineText: PropTypes.string.isRequired,
    hikerLevel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    readMoreText: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default Content;
