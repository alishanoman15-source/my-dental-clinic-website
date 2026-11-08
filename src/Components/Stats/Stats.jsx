import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    { label: 'Happy Patients', value: 1667 },
    { label: 'Teeth Whitened', value: 5000 },
    { label: 'Dental Implants', value: 8333 },
    { label: 'Years of Experience', value: 20 },
  ];

  return (
    <section className="py-20 bg-[#000a3d] text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Number ka color button wala blue (Sky Blue) kar diya */}
            <h3 className="text-5xl font-bold mb-2 text-[#3b82f6]">
              <CountUp end={stat.value} duration={3} enableScrollSpy />+
            </h3>
            <p className="text-gray-200 font-medium text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;