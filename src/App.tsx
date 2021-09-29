import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectScreenById from "./components/ProjectScreenById";
import ProjectsScreen from "./components/ProjectsScreen";

function App() {
    return (
        <Router>
            <Route path="/" component={ProjectsScreen} exact />
            {/* <Route path="/projects/:id" component={ProjectScreenById} exact /> */}
        </Router>
    );
}

export default App;
