import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/actions/projectsActions";
import ProjectScreenById from "./ProjectScreenById";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardStatus,
    CardButton,
    CardParagraph,
    CardDate
} from "./styles/Card";

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
            <CardWrapper>
                <CardBody>
                    <CardHeader>
                        <CardHeading>Project 1</CardHeading>
                    </CardHeader>
                    <CardStatus>running</CardStatus>

                    <CardDate>01.01.21 to 31.12.21</CardDate>

                    <CardParagraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, odio ratione rem ab atque
                        accusamus placeat? Sit ea amet doloribus ratione a eaque laudantium eveniet, animi magni facere
                        ad vel!
                    </CardParagraph>

                    <CardButton type="button">View</CardButton>
                </CardBody>
            </CardWrapper>

            {/* <ProjectScreenById id={data?.id} /> */}
        </div>
    );
};

export default ProjectsScreen;
