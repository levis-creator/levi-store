import React, { useRef, useState } from "react";
type PageIndex = {
  startIndex: number;
  endIndex: number;
};
const usePagination = (items: any[], pageLimit: number) => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const startEnd = useRef<PageIndex>({
    startIndex: 1,
    endIndex: 10,
  });
  const pageCount = Math.ceil(items.length / pageLimit);
  const changePage = (pageNo: number) => {
    setPageNumber(pageNo);
  };
  const pageData = (): any[] => {
    const indexVa = startEnd.current;
    indexVa.startIndex = pageNumber * pageLimit;
    indexVa.endIndex = indexVa.startIndex + pageLimit;

    return items.slice(indexVa.startIndex, indexVa.endIndex);
  };
  return { pageNumber, pageCount, startEnd, changePage, pageData };
};

export default usePagination;
