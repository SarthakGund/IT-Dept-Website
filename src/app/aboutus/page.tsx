'use client';

import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs: React.FC = () => {
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: 'ease-in-out',
    });

    const track = carouselTrackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    const itemWidth = items[0]?.offsetWidth || 0;
    const spacing = 24; // Adjust spacing as needed
    const totalWidth = (itemWidth + spacing) * items.length;

    // Clone items for infinite scrolling
    const clonesBefore = items.map(item => item.cloneNode(true));
    const clonesAfter = items.map(item => item.cloneNode(true));

    // Prepend and append clones
    clonesBefore.reverse().forEach(clone => track.insertBefore(clone, track.firstChild));
    clonesAfter.forEach(clone => track.appendChild(clone));

    let currentIndex = items.length;

    const updateCarousel = () => {
      const translateX = -currentIndex * (itemWidth + spacing);
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(${translateX}px)`;
    };

    const handleNext = () => {
      currentIndex++;
      updateCarousel();

      if (currentIndex === items.length * 2) {
        setTimeout(() => {
          track.style.transition = 'none';
          currentIndex = items.length;
          track.style.transform = `translateX(${-currentIndex * (itemWidth + spacing)}px)`;
        }, 500);
      }
    };

    const handlePrev = () => {
      currentIndex--;
      updateCarousel();

      if (currentIndex === 0) {
        setTimeout(() => {
          track.style.transition = 'none';
          currentIndex = items.length;
          track.style.transform = `translateX(${-currentIndex * (itemWidth + spacing)}px)`;
        }, 500);
      }
    };

    if (nextButtonRef.current) {
      nextButtonRef.current.addEventListener('click', handleNext);
    }
    if (prevButtonRef.current) {
      prevButtonRef.current.addEventListener('click', handlePrev);
    }

    // Initialize carousel position
    track.style.transform = `translateX(${-currentIndex * (itemWidth + spacing)}px)`;

    return () => {
      if (nextButtonRef.current) {
        nextButtonRef.current.removeEventListener('click', handleNext);
      }
      if (prevButtonRef.current) {
        prevButtonRef.current.removeEventListener('click', handlePrev);
      }
    };
  }, []);

  return (
    <div className="font-sans bg-black text-white">
      {/* Hero Section */}
      <div className="text-center py-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-400">Learn more about our mission, vision, and achievements.</p>
      </div>

      {/* Content Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-12 py-12" data-aos="fade-right">
        <img
          src="https://www.djsce.ac.in/images/2_ParaS_Dr%20small.jpg"
          alt="Campus"
          className="w-full md:w-1/2 max-h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 text-lg text-gray-300">
          <h2 className="text-2xl font-bold mb-4">Message from Principal</h2>
          <p>
            Dear All,
            <br />
            Greetings from D. J. Sanghvi College of Engineering!
            <br />
            Covid-19 has changed how we think and live. It is imperative to prepare social engineers who can manage societal
            needs with equanimity and selfless service. With a focus on nation-building, our parent trust, Shri Vile Parle
            Kelavani Mandal (SVKM), leads the way in advancing education.
          </p>
        </div>
      </div>

      {/* Content Section 2 */}
      <div
        className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-6 md:px-12 py-12"
        data-aos="fade-left"
      >
        <img
          src="https://www.powercontrolsystems.in/innovtouch/uploads/2021/08/vision-mission.jpeg"
          alt="Achievements"
          className="w-full md:w-1/2 max-h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 text-lg text-gray-300">
          <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
          <p>
            <strong>Vision</strong>
            <br />
            To be a world-class institution for education, training, and research, fostering sustainable societal development.
            <br />
            <strong>Mission</strong>
            <br />
            1. Provide interactive learning environments and infrastructure for professionalism.
            <br />
            2. Foster technical competence and research aptitude.
            <br />
            3. Bridge academia and industry for continuous education improvement.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-12 px-6 md:px-12" data-aos="zoom-in">
        <h2 className="text-2xl font-bold text-center mb-6">Gallery</h2>
        <div className="relative flex items-center justify-center overflow-hidden">
          <div ref={carouselTrackRef} className="flex transition-transform duration-500 ease-in-out">
            {[
              'https://www.djsce.ac.in/home_banners/18_HPHeader_AI-Bhargav-Desai.jpg',
              'https://www.djsce.ac.in/home_banners/14_HPHeader_14_HPHeader_vice%20chancellors%20challenge_first%20Prize_Rakesh%20Patel.jpg',
              'https://www.djsce.ac.in/home_banners/Ranbir%20Allahabadia.jpg',
              'https://www.djsce.ac.in/home_banners/Frame%20183.png',
              'https://www.djsce.ac.in/home_banners/Frame%20184.png',
            ].map((src, index) => (
              <img key={index} src={src} alt={`Event ${index + 1}`} className="rounded-lg shadow-lg mx-2" />
            ))}
          </div>
          <button ref={prevButtonRef} className="absolute left-2 bg-white text-black p-2 rounded-full shadow-md">
            ❮
          </button>
          <button ref={nextButtonRef} className="absolute right-2 bg-white text-black p-2 rounded-full shadow-md">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
