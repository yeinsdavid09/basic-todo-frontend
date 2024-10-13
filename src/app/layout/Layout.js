//* Base
import "./Layout.css";

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
  { id: 4, description: "Task 4", completed: true },
  { id: 5, description: "Task 5", completed: false },
];

export function Layout() {
  return (
    <div className="LAYOUT__main-container">
      <header className="LAYOUT__header">
        <Header></Header>
      </header>
      <main className="LAYOUT__main">
        <div className="LAYOUT__counter">
          <Counter></Counter>
        </div>
        <div className="LAYOUT__search">
          <Search></Search>
        </div>
        <div className="LAYOUT__list">
          <List>
            {defaultTasks.map((task, index) => {
              return (
                <Item
                  key={task.id}
                  index={index + 1}
                  description={task.description}
                  completed={task.completed}
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
}
