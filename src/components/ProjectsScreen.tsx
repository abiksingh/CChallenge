import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, getProjectForDrawer } from "../redux/actions/projectsActions";
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
const ProjectsScreen = ({ history }: RouteComponentProps) => {
    const dispatch = useDispatch();

    type RootState = {
        getProjects: {
            data: any;
            loading: boolean;
        };
    };

    const [toggle, setToggle] = useState(false);

    const onClickHandler = () => {
        setToggle(true);
    };

    const getProjects = useSelector((state: RootState) => state.getProjects);
    const { data, loading } = getProjects;
    console.log(data);

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

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

    const removeFromCartHandler = (id: any) => {
        dispatch(getProjectForDrawer(id));
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

                                        {/* <CardButton onClick={() => history.push(`/projects/${pro.id}`)} type="button">
                                        View
                                    </CardButton> */}

                                        <CardButton onClick={onClickHandler} type="button">
                                            View
                                        </CardButton>
                                    </CardBody>
                                </CardWrapper>
                                {toggle && <Drawer toggle={toggle} setToggle={setToggle} id={pro.id} />}
                            </>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
};

export default ProjectsScreen;
