import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/actions/projectsActions";
import ProjectScreenById from "./ProjectScreenById";

const ProjectsScreen = () => {
    const dispatch = useDispatch();

    const getProjects = useSelector((state: any) => state.getProjects);
    const { data } = getProjects;

    console.log(data);

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

    return (
        <div>
            <ProjectScreenById id={data?.id} />
        </div>
    );
};

export default ProjectsScreen;
