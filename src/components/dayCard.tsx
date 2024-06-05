import React, { useEffect } from "react";
import { useData } from "../hooks/useContext";
import { ITask, IUseData } from "../interfaces";

interface IDayCard {
  day: number;
  dayOff: boolean;
  openDay: any;
}

const DayCard = ({ day, dayOff, openDay }: IDayCard) => {
  const { month, tasks, activeProfile } = useData() as IUseData;
  const monthsNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  useEffect(() => {}, [activeProfile]);
  return (
    <div className="card" onClick={() => openDay()}>
      <div className={dayOff ? "cardHeaderDayOff" : "cardHeader"}>{day + " " + monthsNames[month[0]]}</div>
      <div className="cardData">
        {"Активных задач: " +
          tasks.filter((task: ITask) => task.owner === activeProfile && new Date(task.date).getDate() === day - 1 && task.state === false).length}
      </div>
      <div className="cardData">
        {"Выполненных задач: " +
          tasks.filter((task: ITask) => task.owner === activeProfile && new Date(task.date).getDate() === day - 1 && task.state === true).length}
      </div>
    </div>
  );
};

export default DayCard;
