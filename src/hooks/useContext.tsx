import React, { useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import httpService from "../services/http.service";
import { CONFIG } from "../config";
import { ITask } from "../interfaces";

interface IContextProvider {
  children: React.ReactNode;
}

const Context = React.createContext({});

export const useData = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }: IContextProvider) => {
  const [profiles, setProfiles] = useState<string[]>();
  const [month, setMonth] = useState<[number, number]>([new Date().getMonth(), new Date().getFullYear()]);
  const [activeProfile, setActiveProfile] = useState<string>();
  const [tasks, setTasks] = useState<ITask[]>();

  async function getProfiles() {
    const profilesData = await httpService.get(CONFIG.API_URL + "owners.json");
    setProfiles(profilesData.data);
    setActiveProfile(profilesData.data[0]);
  }

  async function getTasks() {
    const tasksData = await httpService.get(CONFIG.API_URL + "tasks/" + month[0] + month[1] + ".json");
    tasksData.data !== null ? setTasks(tasksData.data) : setTasks([]);
  }

  useEffect(() => {
    setTasks(undefined);
    getTasks();
  }, [month]);

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Context.Provider
      value={{
        month,
        setMonth,
        profiles,
        activeProfile,
        setActiveProfile,
        tasks,
        setTasks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
