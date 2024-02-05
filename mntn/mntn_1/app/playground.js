import React from "react";
import PropTypes from "prop-types";
// import { ArrowDownward24Px } from "./ArrowDownward24Px";
import "./css/HikingGuide.css";

const Content = ({ equipmentNumber, taglineText, hikerLevel, description, readMoreText, imageSrc }) => {
    const isEven = equipmentNumber % 2 === 0;

    return (
        <div className="content">
            <div className="overlap-group">
                {isEven ? (
                    <>
                        <img className="element" alt="Element" src={imageSrc} />
                        <div className="equipment">{equipmentNumber}</div>
                        <div className="div">
                            <div className="tagline">
                                <div className="get-started">GET STARTED</div>
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
                      <div className="equipment">{equipmentNumber}</div>
                        <div className="div">
                            <div className="tagline">
                                <div className="get-started">GET STARTED</div>
                                <div className="line" />
                            </div>
                            <p className="what-level-of-hiker">{hikerLevel}</p>
                            <p className="text-wrapper">{description}</p>
                            <div className="more">
                                <div className="equipment-2">{readMoreText}</div>
                                {/* <ArrowDownward24Px className="icon-navigation" /> */}
                            </div>
                        </div>
                        <img className="element" alt="Element" src={imageSrc} />
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
