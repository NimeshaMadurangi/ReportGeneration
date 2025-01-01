import React from 'react';

const KaprukaEnglish = ({ lottery }) => {
  return (
    <div className="w-full max-w-4xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        {/* Tree Logo */}
        <img 
          src="../images/logo.png" 
          alt="Tree logo" 
          className="w-12 h-12"
        />
        <div className="text-white text-lg">
          English Letter, Super Number & Winning Numbers
        </div>
      </div>

      {/* Numbers Section */}
      <div className="flex items-center gap-6 mb-4">
        {/* Single Circle */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
          {lottery.ball1 && <span className="text-xl font-bold">{lottery.ball1}</span>}
        </div>

        {/* Four Square Group */}
        <div className="flex gap-2">
          {[lottery.ball2, lottery.ball3, lottery.ball4, lottery.ball5].map((number, index) => (
            <div 
              key={index}
              className="w-12 h-12 bg-white flex items-center justify-center border-2 border-gray-300"
            >
              {number && <span className="text-xl font-bold">{number}</span>}
            </div>
          ))}
        </div>

        {/* Draw Number Input */}
        <div className="flex flex-col gap-1">
          <div className="text-white text-sm">Draw Number</div>
          <input 
            type="text"
            value={lottery.number || ''}
            className="px-2 py-1 rounded border border-gray-300 w-32"
            readOnly
          />
        </div>

        {/* Color Input */}
        <div className="flex flex-col gap-1">
          <div className="text-white text-sm">Colour</div>
          <input 
            type="text"
            value={lottery.color || ''}
            className="px-2 py-1 rounded border border-gray-300 w-32"
            readOnly
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <div className="bg-gray-700 px-4 py-2 rounded text-white">
          <div className="text-sm">Next Super</div>
          <div className="font-bold">Jackpot Rs. {lottery.next_super || '0'}</div>
        </div>

        {/* Info Section */}
        <div className="flex items-center gap-2">
          <img 
            src="/api/placeholder/30/30" 
            alt="Info icon" 
            className="w-8 h-8"
          />
          <div className="text-white text-sm">
            For Special Numbers
            <br />
            For Motor bike & Rs. 50,000 cash prize
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaprukaEnglish;