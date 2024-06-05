import React, { useEffect, useState } from "react";
import Header from "../components/header";
import DayCard from "../components/dayCard";
import { useData } from "../hooks/useContext";
import { IUseData } from "../interfaces";
import httpService from "../services/http.service";
import Loader from "../components/loader";
import Modal from "../components/modal";
import ModalData from "../components/modalData";

const MainPage = () => {
  const [daysOff, setDaysOff] = useState<string[]>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalDay, setModalDay] = useState<number>(1);

  const { month, tasks } = useData() as IUseData;
  const days = () => {
    let days = [];
    for (let day = 1; day <= new Date(new Date().getFullYear(), month[0] + 1, 0).getDate(); day++) {
      days.push(day);
    }
    return days;
  };

  async function getDayOff() {
    const { data } = await httpService.get("https://isdayoff.ru/api/getdata?year=" + month[1] + "&month=" + (month[0] + 1), {
      transformResponse: [(data) => data],
    });
    setDaysOff(data.split(""));
  }

  useEffect(() => {
    getDayOff();
  }, [month]);

  return (
    <>
      {showModal ? (
        <Modal header="123" close={() => setShowModal(false)}>
          <ModalData day={modalDay} cancel={() => setShowModal(false)} />
        </Modal>
      ) : null}

      <Header />
      <main>
        {daysOff && tasks ? (
          days().map((day) => (
            <DayCard
              day={day}
              key={day}
              dayOff={daysOff[Number(day) - 1] === "1"}
              openDay={() => {
                setShowModal(true);
                setModalDay(day);
              }}
            />
          ))
        ) : (
          <Loader title="Загрузка..." />
        )}
      </main>
    </>
  );
};

export default MainPage;
