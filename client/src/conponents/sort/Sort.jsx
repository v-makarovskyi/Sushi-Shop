import "./sort.scss";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Sort = ({
  categories,
  cat,
  items,
  activeSortType,
  handleActiveSortType,
}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeLabel = items.find((item) => item.type === activeSortType).name;
  const activeCatName = categories.find((item) => item.cat === cat).title;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    const path = e.path;
    !path.includes(sortRef.current) && setVisiblePopup(false);
  };

  const onSelectItem = (item) => {
    if (handleActiveSortType) {
      handleActiveSortType(item);
    }
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="sortContainer">
      <div className="wrapper">
        <div className="left">
          <ul className="sortList">
            <Link to="/" className="link">
              <li className="sortList-left">Главная</li>
            </Link>

            <li className="sortList-right">{activeCatName}</li>
          </ul>
        </div>
        <div className="right">
          <div ref={sortRef} className="sort">
            <div className="sort-label">
              <b>Сортировка по:</b>
              <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            <div className="sort-popup">
              {visiblePopup && (
                <ul>
                  {items &&
                    items.map((item) => (
                      <li
                        onClick={() => onSelectItem(item)}
                        className={activeSortType === item.type ? "active" : ""}
                        key={item.type}
                      >
                        {item.name}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
