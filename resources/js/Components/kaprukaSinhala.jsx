import React from 'react';

const DLBLotteryForm = () => {
  return (
    <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 p-2 rounded">
            <span className="text-white font-bold">DLB</span>
          </div>
          <div className="text-sm text-gray-600">
            සම්පත්දාන ලොතරැයිය මණ්ඩලය
            <div>www.dlb.lk</div>
          </div>
        </div>
        <img src="/api/placeholder/40/40" alt="Kapruka logo" className="h-10" />
      </div>

      {/* Main Form */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg p-1">
        {/* Tabs */}
        <div className="flex gap-1 text-white text-sm mb-1">
          <div className="bg-blue-600 px-6 py-3 rounded-t-lg flex items-center gap-2">
            <img src="/api/placeholder/20/20" alt="" className="w-5 h-5" />
            මගේ ගිණුම
          </div>
          <div className="px-6 py-3">පරීක්ෂා</div>
          <div className="px-6 py-3">ගෙවීම</div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg p-6">
          {/* Numbers Row */}
          <div className="flex gap-6 mb-6">
            <div className="flex-1">
              <label className="text-gray-600 text-sm mb-2 block">අංකය</label>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map(num => (
                  <div key={num} className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700">
                    {num}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-48">
              <label className="text-gray-600 text-sm mb-2 block">වර්ගය</label>
              <select className="w-full border rounded-lg p-2 bg-white text-gray-700">
                <option>ශ්‍රී ලංකා</option>
              </select>
            </div>
          </div>

          {/* Date and Amount Row */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 text-sm mb-2 block">දිනය</label>
              <input type="date" className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="text-gray-600 text-sm mb-2 block">මුදල</label>
              <input type="number" className="w-full border rounded-lg p-2" />
            </div>
          </div>

          {/* Helper Text */}
          <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
            <img src="/api/placeholder/20/20" alt="" className="w-5 h-5" />
            කරුණාකර ඉහත තොරතුරු ඇතුලත් කරන්න
          </div>
        </div>
      </div>
    </div>
  );
};

export default DLBLotteryForm;