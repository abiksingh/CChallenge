import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectById } from "../redux/actions/projectsActions";
import {
    DrawerHeading,
    DrawerStatus,
    DrawerWrapper,
    ConsultantWrapper,
    ConsultantImage,
    ConsultantList,
    DrawerButton,
    DrawerDate,
    DrawerParagraph,
    DurationHeader,
    DescriptionHeader,
    ConsultantHeader
} from "./styles/Card";
import moment from "moment";
import Spinner from "./Spinner";

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
                        <ConsultantHeader>Consultants</ConsultantHeader>
                        {project?.consultants.map((consultant: Consultant) => (
                            <ConsultantWrapper key={consultant.id}>
                                <ConsultantImage src={consultant.avatar} alt="avatar" />
                                <ConsultantList>
                                    {consultant.firstName} {consultant.lastName}
                                </ConsultantList>
                            </ConsultantWrapper>
                        ))}
                    </DrawerWrapper>
                </>
            )}
        </div>
    );
};

export default ProjectScreenById;
