//* Base
import "./Layout.css";
import { useState } from "react";

//* Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LS_KEYS } from "../utils/constants";

//* Components
import { LayoutUi } from "./Layout.ui";

const defaultTasks = [
  { id: 1, description: "Task 1", completed: true },
  { id: 2, description: "Task 2", completed: false },
  { id: 3, description: "Task 3", completed: false },
  { id: 4, description: "Task 4", completed: false },
  { id: 5, description: "Task 5", completed: false },
];

export function Layout() {
  //#region --------------------------------- Variables ---------------------------------

  const [tasks, setTasks] = useLocalStorage(LS_KEYS.TASKS, defaultTasks);
  const [searchValue, setSearchValue] = useState("");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function checkTasks(taskIndex) {
    const tasksCopy = [...tasks];
    tasksCopy[taskIndex].completed = !tasksCopy[taskIndex].completed;
    setTasks(tasksCopy);
  }

  function deleteTasks(taskIndex) {
    const tasksCopy = [...tasks];
    tasksCopy.splice(taskIndex, 1);
    setTasks(tasksCopy);
  }

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <LayoutUi
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      checkTasks={checkTasks}
      deleteTasks={deleteTasks}
    ></LayoutUi>
  );

  //#endregion
}
