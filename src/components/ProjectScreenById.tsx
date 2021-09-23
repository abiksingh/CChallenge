import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectById } from "../redux/actions/projectsActions";

const ProjectScreenById = ({ id }: any) => {
    const dispatch = useDispatch();

    const getProjectById = useSelector((state: any) => state.getProjectById);
    const { loading, project } = getProjectById;

    useEffect(() => {
        dispatch(getAllProjectById(id));
    }, [dispatch]);

    return <div></div>;
};

export default ProjectScreenById;
