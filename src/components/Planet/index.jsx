import React, { useState } from "react";
import Button from "../Button";
import Tabs from "../Tabs";
import styles from "./Planet.module.css";

const Planet = ({ planet }) => {
    const [activeTab, setActiveTab] = useState("overview");

    const content = {
        overview: planet.overview.content,
        "internal-structure": planet.structure.content,
        "surface-geology": planet.geology.content,
    };

    const sources = {
        overview: planet.overview.source,
        "internal-structure": planet.structure.source,
        "surface-geology": planet.geology.source,
    };

    const images = {
        overview: planet.images.planet,
        "internal-structure": planet.images.internal,
        "surface-geology": planet.images.planet,
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <main className={styles.main}>
            <Tabs planet={planet} activeTab={activeTab} onChange={handleTabChange} />
            <div className={styles.pageInner}>
                <div className={styles.content}>
                    <section className={styles.contentTop}>
                        <div className={styles.contentImage}>
                            <picture>
                                <img
                                    className={`${styles.planetImage} plimg`}
                                    src={images[activeTab]}
                                    alt={`${planet.name} ${activeTab}`}
                                />
                                {activeTab === "surface-geology" && (
                                    <img
                                        className={styles.geologyImage}
                                        src={planet.images.geology}
                                        alt="Surface geology"
                                    />
                                )}
                            </picture>
                        </div>
                        <div className={styles.contentInfo}>
                            <div className={styles.contentText}>
                                <h1>{planet.name}</h1>
                                <p className={styles.contentExpl}>{content[activeTab]}</p>
                                <div className={styles.contentLink}>
                                    <p>
                                        Source :&nbsp;
                                        <a href={`${sources[activeTab]}`}>Wikipedia</a>
                                    </p>
                                    <a href={`${sources[activeTab]}`}>
                                        <img src="../images/icon-source.svg" alt="source" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.contentButtons}>
                                <Button
                                    number="01"
                                    label="Overview"
                                    onClick={() => handleTabChange("overview")}
                                    isActive={activeTab === "overview"}
                                    planetColor={planet.color}
                                />
                                <Button
                                    number="02"
                                    label="Internal Structure"
                                    onClick={() => handleTabChange("internal-structure")}
                                    isActive={activeTab === "internal-structure"}
                                    planetColor={planet.color}
                                />
                                <Button
                                    number="03"
                                    label="Surface Geology"
                                    onClick={() => handleTabChange("surface-geology")}
                                    isActive={activeTab === "surface-geology"}
                                    planetColor={planet.color}
                                />
                            </div>
                        </div>
                    </section>
                    <section className={styles.contentBottom}>
                        <div className={styles.contentItem}>
                            <h4>ROTATION TIME</h4>
                            <h2>{planet.rotation}</h2>
                        </div>
                        <div className={styles.contentItem}>
                            <h4>REVOLUTION TIME</h4>
                            <h2>{planet.revolution}</h2>
                        </div>
                        <div className={styles.contentItem}>
                            <h4>RADIUS</h4>
                            <h2>{planet.radius}</h2>
                        </div>
                        <div className={styles.contentItem}>
                            <h4>average temp.</h4>
                            <h2>{planet.temperature}</h2>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Planet;
