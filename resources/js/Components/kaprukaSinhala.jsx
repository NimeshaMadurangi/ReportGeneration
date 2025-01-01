import React from 'react';

const DLBLotteryForm = () => {
  return (
    <div className="w-full max-w-4xl bg-gray-900 p-4 rounded-lg text-white">
      {/* Header with logos */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <img 
            src="/images/logo.png"  // Corrected image path
            alt="DLB logo" 
            className="h-8"
          />
          <span className="text-sm">www.dlb.lk</span>
        </div>
        <img 
          src="/images/kapruka.png"  // Corrected image path
          alt="Tree logo" 
          className="h-10 w-10"
        />
      </div>

      {/* Main Form Area */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded p-4">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-4">
          <div className="bg-blue-700 px-4 py-2 rounded-t flex items-center gap-2">
            <img 
              src="/images/kapruka.png"  // Corrected image path
              alt="Icon" 
              className="w-5 h-5"
            />
            <span className="text-sm">මගේ ගිණුම</span>
          </div>
          <div className="px-4 py-2">
            <span className="text-sm">පරීක්ෂා</span>
          </div>
          <div className="px-4 py-2">
            <span className="text-sm">ගෙවීම</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="bg-white rounded p-4">
          {/* Circle input row */}
          <div className="flex gap-4 items-center mb-4">
            <div className="flex-1">
              <label className="text-gray-700 block mb-1 text-sm">අංකය</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div 
                    key={num}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700"
                  >
                    {num}  {/* Add the number inside the circle */}
                  </div>
                ))}
              </div>
            </div>
            {/* Lottery type dropdown */}
            <div className="w-1/4">
              <label className="text-gray-700 block mb-1 text-sm">වර්ගය</label>
              <select className="w-full border border-gray-300 rounded p-2 text-gray-700">
                <option>ශ්‍රී ලංකා</option>
              </select>
            </div>
          </div>

          {/* Date and Amount row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-gray-700 block mb-1 text-sm">දිනය</label>
              <input 
                type="date"
                className="w-full border border-gray-300 rounded p-2 text-gray-700"
              />
            </div>
            <div className="flex-1">
              <label className="text-gray-700 block mb-1 text-sm">මුදල</label>
              <input 
                type="number"
                className="w-full border border-gray-300 rounded p-2 text-gray-700"
              />
            </div>
          </div>

          {/* Helper text */}
          <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
            <img 
              src="/images/kapruka.png"  // Corrected image path
              alt="Info icon" 
              className="w-5 h-5"
            />
            <span>කරුණාකර ඉහත තොරතුරු ඇතුලත් කරන්න</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DLBLotteryForm;
