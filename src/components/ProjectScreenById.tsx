import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectById } from "../redux/actions/projectsActions";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardStatus,
    CardParagraph,
    CardDate,
    Spinner
} from "./styles/Card";
import moment from "moment";

const ProjectScreenById = ({ match }: any) => {
    const dispatch = useDispatch();

    const getProjectById = useSelector((state: any) => state.getProjectById);
    const { loading, project } = getProjectById;

    console.log(project);

    useEffect(() => {
        dispatch(getAllProjectById(match.params.id));
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <CardWrapper>
                    <CardBody>
                        <CardHeader>
                            <CardHeading>{project?.name}</CardHeading>
                        </CardHeader>
                        <CardStatus>{project?.status}</CardStatus>

                        <CardDate>
                            {moment.utc(project?.duration?.start).local().format("DD/MM/YYYY")} to{" "}
                            {moment.utc(project?.duration?.end).local().format("DD/MM/YYYY")}{" "}
                        </CardDate>

                        <CardParagraph>{project?.description}</CardParagraph>
                    </CardBody>
                </CardWrapper>
            )}
        </div>
    );
};

export default ProjectScreenById;
