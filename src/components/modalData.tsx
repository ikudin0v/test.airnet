import React, { useState } from "react";
import { useData } from "../hooks/useContext";
import { ITask, IUseData } from "../interfaces";
import CheckSVG from "../SVG/checkSVG";
import XSVG from "../SVG/xSVG";
import PlusSVG from "../SVG/plusSVG";

interface IModalData {
  day: number;
  cancel(): any;
}

const ModalData = ({ day, cancel }: IModalData) => {
  const { tasks, setTasks, activeProfile, month } = useData() as IUseData;
  const monthsNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task: ITask) => task.id !== id));
  };

  const doneTask = (id: number) => {
    let newTasks = [...tasks];
    newTasks.forEach((task: ITask) => {
      if (task.id === id) {
        task.state = true;
      }
    });
    setTasks(newTasks);
  };

  const addTask = () => {
    if ((document.getElementById("newTaskInput") as HTMLInputElement).value !== "") {
      let task: ITask = { id: 0, date: 0, owner: "", text: "", state: false };
      task.id = new Date().getTime();
      task.date = new Date(month[1], month[0], day).getTime();
      task.owner = activeProfile;
      task.text = (document.getElementById("newTaskInput") as HTMLInputElement).value;
      task.state = false;
      (document.getElementById("newTaskInput") as HTMLInputElement).value = "";
      setTasks([...tasks, task]);
    }
  };

  return (
    <div className="">
      <div className="cardHeader">{"Задачи на " + day + " " + monthsNames[month[0]]}</div>
      <div className="taskList">Активные задачи:</div>
      {tasks
        ? tasks
            .filter((task: ITask) => task.owner === activeProfile && new Date(task.date).getDate() === day && task.state === false)
            .map((task: ITask) => (
              <div className="task">
                <span>{task.text}</span>
                <div>
                  <button className="button doneBtn" onClick={() => doneTask(task.id)}>
                    <CheckSVG />
                  </button>
                  <button className="button removeBtn" onClick={() => removeTask(task.id)}>
                    <XSVG />
                  </button>
                </div>
              </div>
            ))
        : null}
      <div className="task">
        <input type="text" id="newTaskInput" />
        <button className="button addBtn" onClick={() => addTask()}>
          <PlusSVG />
        </button>
      </div>
      <div className="taskList">Выполненные задачи:</div>
      {tasks
        ? tasks
            .filter((task: ITask) => task.owner === activeProfile && new Date(task.date).getDate() === day && task.state === true)
            .map((task: ITask) => (
              <div className="task">
                <span>{task.text}</span>
                <button className="button removeBtn" onClick={() => removeTask(task.id)}>
                  <XSVG />
                </button>
              </div>
            ))
        : null}
      <button className="button closeBtn" onClick={() => cancel()}>
        Закрыть
      </button>
    </div>
  );
};

export default ModalData;
