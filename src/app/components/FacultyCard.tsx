import React from 'react';

interface FacultyCardProps {
  image: string;
  name: string;
  position: string;
  joined: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ image, name, position, joined }) => {
  return (
    <div className="h-[370px] w-[310px] flex flex-col justify-evenly cursor-pointer transition duration-300 hover:scale-105" >
      <div className="fac-img flex flex-col items-center">
        {image && <img src={image} alt={name} className="h-[150px] w-[150px] object-cover rounded-[75px]"/>}
      </div>
      <div className="fac-data flex flex-col justify-center">
        <div className="fac-name font-bold text-xl mt-2 text-center">
          {name}
        </div>
        <div className="fac-pos text-sm text-gray-500 text-center">
          {position}
        </div>
        <div className="fac-joined text-sm text-gray-500 text-center">
          Joined on: {joined}
        </div>
      </div>
      <div className="fac-links">
        {/* <img src="/assets/in" alt="" /> */}
      </div>
    </div>
  );
}

export default FacultyCard;
