import React from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ planet, onChange, activeTab }) => {

    const color = planet.color;

    return (
        <nav className={styles.Navigation}>
            <a href="#" className={`${styles.Item} ${activeTab == "overview" ? `${styles.Active} act` : ""}`} onClick={(e) => {
                e.preventDefault(); onChange("overview");
            }} style={activeTab === "overview" ? { borderColor: color } : {}}>
                <h4>OVERVIEW</h4>
            </a>
            <a href="#" className={`${styles.Item} ${activeTab == "internal-structure" ? `${styles.Active} act` : ""}`} onClick={(e) => {
                e.preventDefault(); onChange("internal-structure");
            }} style={activeTab === "internal-structure" ? { borderColor: color } : {}}>
                <h4>STRUCTURE</h4>
            </a>
            <a href="#" className={`${styles.Item} ${activeTab == "surface-geology" ? `${styles.Active} act` : ""}`} onClick={(e) => {
                e.preventDefault(); onChange("surface-geology");
            }} style={activeTab === "surface-geology" ? { borderColor: color } : {}}>
                <h4>SURFACE</h4>
            </a>
        </nav>
    );
}

export default Tabs;