import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectsScreen from "./components/ProjectsScreen";

function App() {
    return (
        <Router>
            <Route path="/" component={ProjectsScreen} exact />
        </Router>
    );
}

export default App;
