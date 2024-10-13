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
            <Item></Item>
            <Item></Item>
            <Item></Item>
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
