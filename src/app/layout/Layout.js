//* Base
import "./Layout.css";
import { useState } from "react";

//* Components
import { Item } from "../components/Item/Item";
import { Counter } from "../components/Counter/Counter";
import { Search } from "../components/Search/Search";
import { List } from "../components/List/List";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Button } from "../components/Button/Button";

const defaultTasks = [
  { id: 1, description: "Task 1", completed: true },
  { id: 2, description: "Task 2", completed: false },
  { id: 3, description: "Task 3", completed: false },
];

export function Layout() {
  //#region --------------------------------- Variables ---------------------------------

  const [searchValue, setSearchValue] = useState("");
  const [tasks, setTasks] = useState(defaultTasks);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTaks = tasks.filter((task) =>
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
            {searchedTaks.map((task, index) => {
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
