import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-50">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
