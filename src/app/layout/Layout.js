//* Base
import "./Layout.css";
import { useState } from "react";

//* Components
import {
  Item,
  Counter,
  Search,
  List,
  Header,
  Footer,
  Button,
} from "../components";

//* Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LS_KEYS } from "../utils/constants";

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
    <div className="LAYOUT__main-container">
      <header className="LAYOUT__header">
        <Header></Header>
      </header>
      <main className="LAYOUT__main">
        <div className="LAYOUT__counter">
          <Counter completed={completedTasks} total={totalTasks}></Counter>
        </div>
        <div className="LAYOUT__search">
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          ></Search>
        </div>
        <div className="LAYOUT__list">
          <List>
            {searchedTasks.map((task, index) => {
              return (
                <Item
                  key={task.id}
                  taskIndex={index}
                  description={task.description}
                  completed={task.completed}
                  onComplete={() => checkTasks(index)}
                  onDelete={() => deleteTasks(index)}
                ></Item>
              );
            })}
          </List>
        </div>
        <div className="LAYOUT__buttons">
          <Button></Button>
        </div>
      </main>
      <footer className="LAYOUT__footer">
        <Footer></Footer>
      </footer>
    </div>
  );

  //#endregion
}
