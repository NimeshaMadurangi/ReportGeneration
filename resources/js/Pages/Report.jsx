import React from "react";
import LagnaWasanaEnglish from "../Components/LagnaWasanaEnglish";
import LagnaWasanaTamil from "@/Components/lagnawasanawaTamil";
import LagnaWasanaSinhala from "@/Components/lagnawasanawaSinhala";

const Report = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", 
                backgroundColor: "#f0f0f0", 
            }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <LagnaWasanaEnglish />
            <LagnaWasanaSinhala />
            <LagnaWasanaTamil />
            </div>
        </div>
    );
};

export default Report;
