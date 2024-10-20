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

export function LayoutUi({
  completedTasks,
  totalTasks,
  searchValue,
  setSearchValue,
  searchedTasks,
  checkTasks,
  deleteTasks,
  loading,
  error,
}) {
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
            {loading && (
              <p className="LAYOUT__loading GLOBAL__text-heading--3">
                Cargando tareas...
              </p>
            )}
            {error && (
              <p className="LAYOUT__loading GLOBAL__text-heading--3">
                Ups... Algo salió mal
              </p>
            )}
            {!loading &&
              !error &&
              searchedTasks.map((task, index) => {
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
