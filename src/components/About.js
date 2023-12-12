import React from 'react';
import TeamMember1 from "../assets/images/TeamMember1.jpg";
import TeamMember2 from "../assets/images/TeamMember2.jpg";
import TeamMember3 from "../assets/images/TeamMember3.jpg";
import TeamMember4 from "../assets/images/TeamMember4.jpg";

const AboutUs = () => {
  return (
    <div className = "about-us-container bg-white p-8 rounded-lg shadow-lg">
      <h1 className = "text-3xl font-bold mb-6">Welcome to Our Company</h1>
      <p className = "text-gray-700 mb-4">
        Welcome to FlavorFiesta - your ultimate destination for culinary delights! At FlavorFiesta, we believe that food is not just a necessity; it's an experience that should be savored and celebrated. Our mission is to bring you a seamless and delightful journey through the world of flavors, right from the comfort of your home.
      </p>
      <p className = "text-gray-700 mb-4">
        Explore our vast collection of diverse cuisines, carefully curated to tantalize your taste buds. Whether you crave the comforting warmth of home-cooked meals or the exotic spices of international dishes, FlavorFiesta has it all. Our team of passionate chefs and food enthusiasts work tirelessly to bring you the finest recipes, ensuring each bite is a moment of pure bliss.
      </p>
      <p className = "text-gray-700 mb-6">
        At FlavorFiesta, we understand the importance of convenience. That's why our user-friendly app allows you to browse, order, and savor your favorite dishes effortlessly. From quick bites to elaborate feasts, we've got you covered. Discover new culinary horizons or indulge in your go-to comfort foods – the choice is yours!
      </p>
      <h2 className = "text-2xl font-bold mb-4">Our Mission</h2>
      <p className = "text-gray-700 mb-6">
        Our mission at FlavorFiesta is to redefine the way you experience food. We aim to make every meal an adventure, every bite a discovery. Through innovative technology and a passion for exceptional dining, we strive to connect you with the best flavors from around the globe. Join us in this culinary journey, where every dish tells a story and every taste leaves an impression.
      </p>
      <h2 className = "text-2xl font-bold mb-4">Our Team</h2>
      <div className = "grid grid-cols-4 gap-8">
        <div className = "team-member">
          <img
            src = {TeamMember1}
            alt = "Team Member 1"
            className = "rounded-full mb-4 w-32 h-32 object-cover"
          />
          <p className = "text-gray-700 font-semibold">Rahul Kumar</p>
          <p className = "text-gray-500">Site Reliability Engineer</p>
        </div>
        <div className = "team-member">
          <img
            src = {TeamMember2}
            alt = "Team Member 2"
            className = "rounded-full mb-4 w-32 h-32 object-cover"
          />
          <p className = "text-gray-700 font-semibold">Arpana Jha</p>
          <p className = "text-gray-500">Senior Full Stack Developer</p>
        </div>
        <div className = "team-member">
          <img
            src = {TeamMember3}
            alt = "Team Member 2"
            className = "rounded-full mb-4 w-32 h-32 object-cover"
          />
          <p className = "text-gray-700 font-semibold">Abha Jha</p>
          <p className = "text-gray-500">Software Engineer</p>
        </div>
        <div className = "team-member">
          <img
            src = {TeamMember4}
            alt = "Team Member 2"
            className = "rounded-full mb-4 w-32 h-32 object-cover"
          />
          <p className = "text-gray-700 font-semibold">Shubham Choudhary</p>
          <p className = "text-gray-500">Web Developer</p>
        </div>
      </div>
    </div>
  );
  
};

export default AboutUs;
