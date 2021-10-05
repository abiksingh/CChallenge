import { AnyAction } from "redux";
import {
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_ID_REQUEST,
    GET_PROJECTS_ID_SUCCESS,
    GET_PROJECTS_ID_FAIL
} from "../constants/projectsConstants";

export const getProjectsReducer = (state = { data: [] }, action: AnyAction) => {
    switch (action.type) {
        case GET_PROJECTS_REQUEST:
            return {
                loading: true
            };
        case GET_PROJECTS_SUCCESS:
            return {
                loading: false,
                success: true,
                data: action.payload
            };

        case GET_PROJECTS_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export const getProjectByIdReducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case GET_PROJECTS_ID_REQUEST:
            return { loading: true, ...state };
        case GET_PROJECTS_ID_SUCCESS:
            return { loading: false, project: action.payload };
        case GET_PROJECTS_ID_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
