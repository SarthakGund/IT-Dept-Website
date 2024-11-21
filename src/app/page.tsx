import React from 'react';
import FacultyCard from './components/FacultyCard';

interface Faculty {
  name: string;
  position: string;
  joined: string;
  image: string;
}

const facultyList: Faculty[] = [
  {
    name: "Dr. (Mrs.) Vinaya M. Sawant",
    position: "Head of the Department",
    joined: "6.8.2003",
    image: "/assets/fac-pic.jpeg"
  },
  {
    name: "Dr. Abhijit R. Joshi",
    position: "Professor",
    joined: "13.4.2004",
    image: "/assets/fac-pic.jpeg"
  },
  {
    name: "Dr. (Mrs.) Monika Mangla",
    position: "Associate Professor",
    joined: "11.01.2022",
    image: "/assets/fac-pic.jpeg"
  },
  {
    name: "Dr. (Mrs.) Monika Mangla",
    position: "Associate Professor",
    joined: "11.01.2022",
    image: "/assets/fac-pic.jpeg"
  },
  {
    name: "Dr. (Mrs.) Monika Mangla",
    position: "Associate Professor",
    joined: "11.01.2022",
    image: "/assets/fac-pic.jpeg"
  },
  // Add more faculty members as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-black text-white flex items-center flex-col">
        <div className="bg-black text-white hero-section h-[100vh] py-[210px] w-[96%]">
          <div className="hero-heading px-[50px] w-[60%] leading-relaxed font-bold 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-4xl">
            Official website of IT department of DJSCE
          </div>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="heading 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-semibold text-center">
          Our Faculties
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="faculty-sec flex flex-wrap justify-evenly gap-[40px] w-[96%]">
            {facultyList.map((faculty, index) => (
              <FacultyCard 
                key={index}
                image={faculty.image}
                name={faculty.name}
                position={faculty.position}
                joined={faculty.joined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
