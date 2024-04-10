import { Stats } from "../squarecard/SquareCards";

const RectangleCard = ({ data }: { data: Stats }) => {
  return (
    <div className="rounded-lg shadow-lg text-slate-800 dark:text-slate-50  bg-white dark:bg-slate-700 p-4 ">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${data.color} rounded-full flex text-slate-50 items-center justify-center`}
        >
          {data.icons}
        </div>
        <div className="">
          <p>{data.title}</p>
          <h3 className="text-2xl font-bold">{data.sales}</h3>
        </div>
      </div>
    </div>
  );
};

export default RectangleCard;
