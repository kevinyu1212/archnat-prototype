import React from 'react';

const Leaderboard = ({ topUsers }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-3xl">
      <h2 className="text-2xl font-black mb-6 text-green-900">🏆 이달의 생태 수호자 (Top 100)</h2>
      <div className="space-y-3">
        {topUsers.map((user, index) => (
          <div key={user.id} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors">
            <span className="w-8 font-bold text-lg text-gray-400">{index + 1}</span>
            <div className="w-10 h-10 rounded-full bg-blue-500 mr-4" />
            <div className="flex-grow">
              <span className="font-bold text-gray-800">{user.name}</span>
              <div className="flex gap-1 mt-1">
                {user.badges.map(badge => (
                  <span key={badge} className="text-[9px] bg-white border border-green-200 text-green-700 px-1.5 py-0.5 rounded-md">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Impact Credit</p>
              <p className="font-black text-green-600">{user.credit.toLocaleString()} ₳</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
