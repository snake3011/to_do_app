import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CreateTask from "./components/pages/CreateTask";
import TaskList from "./components/pages/TaskList";

function App() {
  
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <TaskList></TaskList>
          </Route>
          <Route path="/create-task" exact>
            <CreateTask></CreateTask>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
