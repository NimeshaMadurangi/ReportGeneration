import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const ViewOrExportReport = () => {
    const [selectedDate, setSelectedDate] = useState("");

    // Handle exporting the report
    const handleExportReport = (e) => {
        e.preventDefault();
        if (!selectedDate) {
            alert("Please select a date!");
            return;
        }

        // Redirect user to download the PDF
        window.location.href = `/export-report?date=${selectedDate}`;
    };

    return (
        <div className="w-[500px] h-auto mx-auto">
            <div className="py-12">
                <div className="max-w-5xl mx-auto sm:px-4 lg:px-6">
                    <div className="form-container space-y-8">
                        <h3 className="form-heading">View or Export Report</h3>
                        <form className="space-y-4">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="form-input"
                            />

                            <div className="flex space-x-4">
                                <button
                                    onClick={handleExportReport}
                                    className="submit-button bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                                >
                                    Export Report
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewOrExportReport;
