import React from "react";
import LagnaWasanaEnglish from "../Components/LagnaWasanaEnglish"; // Ensure correct path

const Report = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center", // Center the content horizontally
                alignItems: "center", // Center the content vertically
                height: "100vh", // Full viewport height
                backgroundColor: "#f0f0f0", // Set a background color if needed
            }}
        >
            <LagnaWasanaEnglish />
        </div>
    );
};

export default Report;
