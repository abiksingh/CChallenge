import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/actions/projectsActions";
import ProjectScreenById from "./ProjectScreenById";
import moment from "moment";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardStatus,
    CardButton,
    CardParagraph,
    CardDate,
    Spinner
} from "./styles/Card";

const ProjectsScreen = ({ history }: any) => {
    const dispatch = useDispatch();

    const getProjects = useSelector((state: any) => state.getProjects);
    const { data, loading } = getProjects;

    console.log(moment.utc(data?.duration?.start).local().format("DD/MM/YYYY"));

    console.log(data);

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {data?.map((pro: any) => (
                        <CardWrapper key={pro.id}>
                            <CardBody>
                                <CardHeader>
                                    <CardHeading>{pro.name}</CardHeading>
                                </CardHeader>
                                <CardStatus>{pro.status}</CardStatus>

                                <CardDate>
                                    {moment.utc(pro?.duration?.start).local().format("DD/MM/YYYY")} to{" "}
                                    {moment.utc(pro?.duration?.end).local().format("DD/MM/YYYY")}{" "}
                                </CardDate>

                                <CardParagraph>{pro.description}</CardParagraph>

                                <CardButton onClick={() => history.push(`/projects/${pro.id}`)} type="button">
                                    View
                                </CardButton>
                            </CardBody>
                        </CardWrapper>
                    ))}
                </>
            )}
        </div>
    );
};

export default ProjectsScreen;
