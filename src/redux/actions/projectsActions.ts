import axios from "axios";
import { Dispatch } from "redux";
import {
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_ID_REQUEST,
    GET_PROJECTS_ID_SUCCESS,
    GET_PROJECTS_ID_FAIL,
    GET_PROJECT_FOR_DRAWER
} from "../constants/projectsConstants";

export const getAllProjects = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: GET_PROJECTS_REQUEST
        });

        const { data } = await axios.get(`/projects?pageNumber=1&limit=12`);

        dispatch({
            type: GET_PROJECTS_SUCCESS,
            payload: data
        });
    } catch (error: any) {
        dispatch({
            type: GET_PROJECTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const getAllProjectById = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: GET_PROJECTS_ID_REQUEST
        });

        const { data } = await axios.get(`/projects/${id}`);

        dispatch({
            type: GET_PROJECTS_ID_SUCCESS,
            payload: data
        });
    } catch (error: any) {
        dispatch({
            type: GET_PROJECTS_ID_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const getProjectForDrawer = (id: any) => (dispatch: Dispatch) => {
    dispatch({
        type: GET_PROJECT_FOR_DRAWER,
        payload: id
    });
};
