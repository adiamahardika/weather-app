interface SmallCardProps {
  dayTitle: string;
  icon: string;
  min: number;
  max: number;
  temp: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
  dayTitle,
  icon,
  min,
  max,
  temp,
}) => {
  return (
    <div className="bg-darkblue py-4 px-5 flex flex-col items-center space-y-4">
      <p>{dayTitle}</p>
      <img src={`/icons/${icon}.svg`} alt="weather-icon" className="max-h-16" />
      <div className="flex justify-between space-x-5">
        <p>
          {max}&deg;{temp}
        </p>
        <p className="text-gray-250">
          {min}&deg;{temp}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
