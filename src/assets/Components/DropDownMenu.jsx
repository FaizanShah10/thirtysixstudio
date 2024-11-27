import React, { useState } from "react";

const DropDownMenu = () => {
  const dropdowns = [
    {
      title: "Creative",
      items: ["Art Direction", "Creative Direction"],
    },
    {
      title: "Design",
      items: ["Digital Design", "UX/UI Design", 'Web Design', "Graphic Design"],
    },
    {
      title: "Animation",
      items: ["2D Animation", "3D Animation", "Motion Graphics"],
    },
    {
      title: "Technology",
      items: ["Development", "Implementation", "Creative Coding"],
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null); // Track the open dropdown

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index)); // Toggle the selected dropdown
  };

  return (
    <div className="lg:w-[45%] md:w-[45%] w-full mx-auto mt-28 space-y-4">
      {dropdowns.map((dropdown, index) => (
        <div key={index}>
          {/* Button */}
          <button
            onClick={() => toggleDropdown(index)}
            className="flex items-center justify-between w-full p-4 border-b-[1px] border-black text-lg font-semibold focus:outline-none"
          >
            <span>{dropdown.title}</span>
            <span
              className="text-2xl hover:bg-black hover:text-white transition-all duration-500 border-gray-200 border-[1px] px-3 flex items-center justify-center rounded-full"
            >
              {openDropdown === index ? "-" : "+"}
            </span>
          </button>

          {/* Dropdown Content */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out border-gray-300 rounded-md ${
              openDropdown === index ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <ul className="p-4 space-y-2 text-sm">
              {dropdown.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-gray-700 border-b-[1px] border-gray-600 pb-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
