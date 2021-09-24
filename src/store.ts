import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    getProjectsReducer,
    getProjectByIdReducer,
    filterProjectsByIdReducer
} from "./redux/reducers/projectsReducers";

const reducer = combineReducers({
    getProjects: getProjectsReducer,
    getProjectById: getProjectByIdReducer,
    filterProjectsById: filterProjectsByIdReducer
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
