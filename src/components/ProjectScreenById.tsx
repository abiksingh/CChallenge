import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as H from "history";
import { getAllProjectById } from "../redux/actions/projectsActions";
import {
    DrawerHeading,
    DrawerStatus,
    DrawerWrapper,
    ConsultantWrapper,
    ConsultantUlWrapper,
    ConsultantImage,
    ConsultantList,
    DrawerButton,
    DrawerDate,
    DrawerParagraph,
    DurationHeader,
    DescriptionHeader,
    ConsultantHeader,
    Wrapper
} from "./UI Helpers/Styles";
import moment from "moment";
import Spinner from "./Spinner";

interface RouteProps<P> {
    match: match<P>;
    history: H.History;
}

export interface match<P> {
    params: P;
}

const ProjectScreenById = ({ id, setToggle }: any) => {
    const dispatch = useDispatch();

    type RootState = {
        getProjectById: {
            loading: boolean;
            project: any;
        };
    };

    const getProjectById = useSelector((state: RootState) => state.getProjectById);
    const { loading, project } = getProjectById;

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
                <>
                    <DrawerWrapper>
                        <DrawerButton onClick={() => setToggle(false)}>Back</DrawerButton>
                        <DrawerStatus status={project?.status}>{project?.status}</DrawerStatus>
                        <DrawerHeading>{project?.name}</DrawerHeading>
                        <DurationHeader>Duration</DurationHeader>
                        <DrawerDate>
                            {moment.utc(project?.duration?.start).local().format("DD/MM/YYYY")} <span>to</span>
                            <strong> {moment.utc(project?.duration?.end).local().format("DD/MM/YYYY")} </strong>
                        </DrawerDate>
                        <DescriptionHeader>Description</DescriptionHeader>
                        <DrawerParagraph>{project?.description}</DrawerParagraph>
                        <ConsultantWrapper>
                            <ConsultantHeader>Consultants</ConsultantHeader>

                            {project?.consultants.map((consultant: Consultant) => (
                                <Wrapper key={consultant.id}>
                                    <ConsultantImage src={consultant.avatar} alt="avatar" />
                                    <ConsultantUlWrapper>
                                        <ConsultantList>
                                            {consultant.firstName} {consultant.lastName}
                                        </ConsultantList>
                                    </ConsultantUlWrapper>
                                </Wrapper>
                            ))}
                        </ConsultantWrapper>
                    </DrawerWrapper>
                </>
            )}
        </div>
    );
};

export default ProjectScreenById;
