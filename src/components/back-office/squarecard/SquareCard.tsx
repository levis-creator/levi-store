import { Stats } from "./SquareCards";

const SquareCard = ({ data }: { data: Stats }) => {
  function formatCompactNumber(number: number) {
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1_000_000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
    }
  }

  return (
    <div
      className={` shadow-md p-8 rounded-lg ${data.color} text-white flex items-center flex-col gap-2 py-8`}
    >
      {/* icon */}
      {data.icons}
      <h4>{data.title}</h4>
      <h2 className="text-2xl lg:text-3xl">
        Ksh.{formatCompactNumber(data.sales)}
      </h2>
    </div>
  );
};

export default SquareCard;
