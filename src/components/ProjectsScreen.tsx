import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, filterProjectById } from "../redux/actions/projectsActions";
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
    CardDate
} from "./styles/Card";
import Spinner from "./Spinner";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

const ProjectsScreen = () => {
    const dispatch = useDispatch();

    type RootState = {
        getProjects: {
            data: any;
            loading: boolean;
        };
    };

    const getProjects = useSelector((state: RootState) => state.getProjects);
    const { data, loading } = getProjects;

    console.log(moment.utc(data?.duration?.start).local().format("DD/MM/YYYY"));

    console.log(data);

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

    const [toggle, setToggle] = useState(false);

    const onClickHandler = (id: any) => {
        setToggle(true);
        dispatch(filterProjectById(id));
    };

    type Project = {
        description: string;
        id: string;
        name: string;
        status: string;
        duration: {
            start: string;
            end: string;
        };
    };

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Navbar />
                    {data?.map((pro: Project) => (
                        <>
                            <CardWrapper key={pro.id}>
                                <CardBody>
                                    <CardHeader>
                                        <CardHeading>{pro.name}</CardHeading>
                                    </CardHeader>
                                    <CardStatus status={pro.status}>{pro.status}</CardStatus>

                                    <CardDate>
                                        {moment.utc(pro?.duration?.start).local().format("DD/MM/YYYY")} to{" "}
                                        <strong> {moment.utc(pro?.duration?.end).local().format("DD/MM/YYYY")} </strong>
                                    </CardDate>

                                    <CardParagraph>{pro.description}</CardParagraph>

                                    {/* <CardButton onClick={() => history.push(`/projects/${pro.id}`)} type="button">
                                        View
                                    </CardButton> */}

                                    <CardButton onClick={() => onClickHandler(pro.id)} type="button">
                                        View
                                    </CardButton>
                                </CardBody>
                            </CardWrapper>

                            {toggle && <Drawer id={pro.id} />}
                        </>
                    ))}
                </>
            )}
        </div>
    );
};

export default ProjectsScreen;
