import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";

const MainContent = ({
  windspeed,
  humidity,
  visibility,
  airPressure,
  forecast,
}: any) => {
  return (
    <div className="text-gray-150 p-10 flex-grow">
      <div className="my-10">
        <h3 className="text-2xl font-bold mb-5">Today's Highlights</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
          <LargeCard title="Wind Status" num={windspeed} desc="km"></LargeCard>

          <LargeCard title="Humidity" num={humidity} desc="%">
            <div className="self-stretch text-gray-250 text-xs space-y-1">
              <div className="flex justify-between space-x-5 items-center px-1">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div
                  className="bg-[#FFEC65] h-2"
                  style={{ width: `${humidity}%` }}
                ></div>
              </div>
              <p className="text-right">%</p>
            </div>
          </LargeCard>

          <LargeCard title="Visibility" num={visibility} desc=" km" />

          <LargeCard title="Air Pressure" num={airPressure} desc=" mb" />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-5">Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-5 gap-10 justify-center">
        {forecast?.map((item: any, index: number) => {
          return (
            <SmallCard
              key={index}
              dayTitle={item.dt_txt.split(" ")[0]}
              icon={item.weather[0].icon}
              min={Math.round(item.main.temp_min - 273.15)}
              max={Math.round(item.main.temp_max - 273.15)}
              temp="C"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
