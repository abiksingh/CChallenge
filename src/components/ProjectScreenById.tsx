import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectById } from "../redux/actions/projectsActions";
import { CardWrapper, CardHeader, CardHeading, CardBody, CardStatus, CardParagraph, CardDate } from "./styles/Card";
import moment from "moment";
import Spinner from "./Spinner";

const ProjectScreenById = ({ id }: any) => {
    const dispatch = useDispatch();

    type RootState = {
        getProjectById: {
            loading: boolean;
            project: any;
        };
    };

    const getProjectById = useSelector((state: RootState) => state.getProjectById);
    const { loading, project } = getProjectById;

    console.log(project);

    useEffect(() => {
        dispatch(getAllProjectById(id));
    }, [dispatch, id]);

    type Consultant = {
        id: string;
        avatar: string;
        firstName: string;
        lastName: number;
    };

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
                        <CardStatus status={project?.status}>{project?.status}</CardStatus>

                        <CardDate>
                            {moment.utc(project?.duration?.start).local().format("DD/MM/YYYY")} to{" "}
                            <strong> {moment.utc(project?.duration?.end).local().format("DD/MM/YYYY")} </strong>
                        </CardDate>

                        <CardParagraph>{project?.description}</CardParagraph>

                        {project?.consultants.map((consultant: Consultant) => (
                            <ul key={consultant.id}>
                                <img src={consultant.avatar} alt="avatar" />
                                <li>
                                    {consultant.firstName} {consultant.lastName}
                                </li>
                            </ul>
                        ))}
                    </CardBody>
                </CardWrapper>
            )}
        </div>
    );
};

export default ProjectScreenById;
