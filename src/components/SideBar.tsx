import { useState } from "react";
import SearchLocation from "./SearchLocation";

const SideBar = ({ icon, num, desc, loc }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };

  const formattedDate = now.toLocaleDateString("en-GB", options);

  return (
    <div className="flex flex-col min-h-screen bg-darkblue w-full lg:w-1/3 p-7 lg:p-4 xl:p-7 space-y-10 overflow-x-hidden">
      {isOpen ? (
        <SearchLocation onClose={() => setIsOpen(false)} />
      ) : (
        <>
          <div className="relative -mx-36 flex justify-center items-center max-h-40">
            <img
              src="/images/Cloud-background.png"
              alt="bg"
              className="opacity-10 absolute max-w-52"
            />
            <img src={`/icons/${icon}.svg`} alt="weather" className="w-2/3" />
          </div>

          <div className="flex flex-col items-center justify-between flex-grow pt-6">
            <h1 className="text-gray-150 text-[144px] font-medium">
              {num}
              <span className="text-5xl text-gray-250">&deg;C</span>
            </h1>
            <h3 className="font-semibold text-4xl text-gray-250">{desc}</h3>
            <div className="flex flex-col items-center text-center text-gray-350 text-lg space-y-5">
              <p>Today &bull; {formattedDate}</p>
              <p>
                <i className="fas fa-map-marker-alt"></i> {loc}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
