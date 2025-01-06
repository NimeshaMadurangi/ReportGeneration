import React from "react";
import LagnaWasanaEnglish from "../Components/LagnaWasanaEnglish";
import LagnaWasanaTamil from "@/Components/lagnawasanawaTamil";
import LagnaWasanaSinhala from "@/Components/lagnawasanawaSinhala";
import SasiriEnglish from "@/Components/sasiriEnglish";
import SasiriSinhala from "@/Components/sasiriSinhala";
import SasiriTamil from "@/Components/sasiriTamil";


const Report = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 mt-8">
                <LagnaWasanaEnglish />
                <LagnaWasanaSinhala />
                <LagnaWasanaTamil />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 mt-8">
                <SasiriEnglish />
                <SasiriSinhala />
                <SasiriTamil />
            </div>
        </div>
    );
};

export default Report;
 