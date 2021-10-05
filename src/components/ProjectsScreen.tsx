import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/actions/projectsActions";
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
    Grid
} from "./UI Helpers/Styles";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
const ProjectsScreen = () => {
    const dispatch = useDispatch();

    type RootState = {
        getProjects: {
            data: any;
            loading: boolean;
        };
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

    const [toggle, setToggle] = useState(false);
    const [projectId, setProjectId] = useState("0");

    const getProjects = useSelector((state: RootState) => state.getProjects);
    const { data, loading } = getProjects;
    console.log(data);

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

    const showProjectId = (event: any) => {
        const input = event.target as HTMLElement;
        setProjectId(input.id);
        setToggle(true);
    };

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Navbar />
                    <Grid>
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
                                            <strong>
                                                {" "}
                                                {moment.utc(pro?.duration?.end).local().format("DD/MM/YYYY")}{" "}
                                            </strong>
                                        </CardDate>

                                        <CardParagraph>{pro.description}</CardParagraph>

                                        <CardButton id={pro.id} onClick={showProjectId} type="button">
                                            View
                                        </CardButton>
                                    </CardBody>
                                </CardWrapper>
                                {toggle && <Drawer setToggle={setToggle} id={projectId} />}
                            </>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
};

export default ProjectsScreen;
