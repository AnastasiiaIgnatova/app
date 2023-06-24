import React, { useState } from "react";
import "./Paginator.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // let portionSize = 10;
  let portionCount = Math.ceil(pagesCount / portionSize);//сколько порций получится = сколько страниц : размер порций
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  // let curP = currentPage;
  // let curPF = curP - 5 < 0 ? 0 : curP - 5;
  // let curPL = curP + 3;
  // let slicedPages = pages.slice(curPF, curPL);



  return (
    <div className="paginator">
      {portionNumber > 1 &&
      <button  onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
      {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
      .map((p) => {
        return (
          <span
            key={p.id}
            className={currentPage === p ? "selectedPage" : "page"}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>)
      })}
      {portionCount > portionNumber &&
      <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>}
      {/* {slicedPages.map((p) => {
        return (
          <span
            key={p.id}
            className={currentPage === p ? "selectedPage" : "page"}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })} */}

    </div>
  );
};

export default Paginator;
