import React, { useEffect } from "react";
import { useData } from "../hooks/useContext";
import { IUseData } from "../interfaces";

const Header = () => {
  const { month, setMonth, activeProfile, setActiveProfile, profiles } = useData() as IUseData;
  const monthsNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const changeMonth = (order: string) => {
    if (order === "asc") {
      if (month[0] !== 11) {
        setMonth([month[0] + 1, month[1]]);
      } else {
        setMonth([1, month[1] + 1]);
      }
    } else {
      if (month[0] !== 0) {
        setMonth([month[0] - 1, month[1]]);
      } else {
        setMonth([11, month[1] - 1]);
      }
    }
  };
  useEffect(() => {}, [profiles]);
  return (
    <header>
      <div className="currentMonth">
        <button className="button weekBtn" onClick={() => changeMonth("desc")}>
          {"<"}
        </button>
        <div>{monthsNames[month[0]] + " " + month[1]}</div>
        <button className="button weekBtn" onClick={() => changeMonth("asc")}>
          {">"}
        </button>
      </div>
      <div className="profileSelect">
        <label htmlFor="profile-select" defaultValue={activeProfile}>
          {"Профиль: "}
        </label>
        <select name="pets" id="profile-select" onChange={(e) => setActiveProfile(e.target.value)}>
          {profiles
            ? profiles.map((profile: string) => (
                <option key={profile} value={profile}>
                  {profile}
                </option>
              ))
            : null}
        </select>
      </div>
    </header>
  );
};

export default Header;
