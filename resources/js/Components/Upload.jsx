import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import '../../css/form.css';

const Upload = () => {
    const [files, setFiles] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    // Handle file selection
    const handleFileChange = (e) => {
        setFiles([...e.target.files]); // Store selected files in the state
    };

    // Handle file upload
    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append each file to the FormData object
        files.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });

        Inertia.post('/upload', formData);
    };


    return (
        <div className="w-[500px] h-auto mx-auto">
            <div className="py-12">
                <div className="max-w-5xl mx-auto sm:px-4 lg:px-6">
                    <div className="form-container space-y-8">
                        {/* File Upload Form */}
                        <div>
                            <h3 className="form-heading">Upload Lottery XML Files</h3>
                            <form onSubmit={handleUpload} className="space-y-4">
                                <input
                                    type="file"
                                    accept=".xml"
                                    onChange={handleFileChange}
                                    multiple
                                    className="form-input"
                                />

                                {/* Display selected files */}
                                {files.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="text-lg font-semibold">Selected Files:</h4>
                                        <ul className="list-disc list-inside">
                                            {files.map((file, index) => (
                                                <li key={index} className="text-sm">
                                                    {file.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="submit-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Upload;
