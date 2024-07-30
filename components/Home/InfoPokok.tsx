import React from 'react';

const InfoPokok: React.FC = () => {
  // Data jumlah siswa, staff, dan guru
  const studentCount = 200;
  const staffCount = 50;
  const teacherCount = 30;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Informasi Sekolah</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Siswa</h2>
          <p className="text-4xl">{studentCount}</p>
        </div>
        <div className="bg-violet-700 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Staff</h2>
          <p className="text-4xl">{staffCount}</p>
        </div>
        <div className="bg-amber-400 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Guru</h2>
          <p className="text-4xl">{teacherCount}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPokok;
