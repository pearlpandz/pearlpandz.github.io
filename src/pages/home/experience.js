import React from 'react'
import styled from '@emotion/styled'
import { Container, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ExperienceSection = styled.div`
    padding: 50px 0;
    background-color: #ecf1f7;
`;

const Experiences = styled.div`
    padding: 50px 0;
    background-color: #ecf1f7;
`;

const ExperienceItem = styled.div`
    background-color: #ffffff;
    box-shadow: 0 0px 25px 10px rgb(0 0 0 / 9%);
    margin-bottom: 30px;
    border-radius: 5px;
`;

const EXPERIENCES = [{
    company: 'Accenture',
    companyLink: 'https://www.accenture.com/',
    location: 'Chennai, Tamil Nadu, India',
    designation: 'Application Development Senior Analyst',
    skills: 'React Js · React Native · MERN Stack · Agile Methodologies · Jira · Angular · HTML · Cascading Style Sheets (CSS) · JavaScript · SVN · Amazon Workspace · AWS Services - Lambda, Console, CloudFront, API Gateway, S3 Bucket',
    responsibility: "I lead the Front-End Team and Build Web and Mobile applications with Clean and Bug free code. During the development, we followed Agile methodology and Jira Dashboard for the activity tracking. Maintain multiple environments like Dev, UAT and Production with specific configurations. And closely worked with Design and Testing team to understand the application flow and find the root cause of the issues.",
    from: 'Dec 2021',
    to: 'Present',
    duration: '9 months',
}, {
    company: 'Servion Global Solutions',
    companyLink: 'https://servion.com/',
    location: 'Chennai, Tamil Nadu, India',
    designation: 'Software Engineer',
    skills: 'MEAN Stack · Angular · Micro Front-end · HTML · Cascading Style Sheets (CSS) · JavaScript · TypeScript · Adobe XD · SVN · AWS Services - Lambda, CloudFront, S3 Bucket',
    responsibility: "Build enterprise application for Contact Center and CX Solution. Planned the structure and designed the web application prototypes; Developed components and features that can enhance the user experience; Integrated the dynamic data by APIs. Followed Waterfall Method for the project tracking. Deployed the application with AWS Services.",
    from: 'Dec 2019',
    to: 'Dec 2021',
    duration: '2 years 1 month'
}, {
    company: 'ObjectFrontier Software',
    companyLink: 'https://relevantz.com/',
    location: 'Chennai, Tamil Nadu, India',
    designation: 'Software Engineer',
    skills: 'MEAN Stack · Angular · HTML · Cascading Style Sheets (CSS) · JavaScript · Adobe XD · Git ',
    responsibility: "Build enterprise application for Healthcare Platform. Supported the team to create prototypes, frontend development with API Integration and deployment in AWS Console.",
    from: 'Jun 2019',
    to: 'Jun 2019',
    duration: '6 months'
}, {
    company: 'Nextazy Solutions',
    companyLink: 'https://www.nextazy.com/',
    location: 'Chennai, Tamil Nadu, India',
    designation: 'UI UX Developer',
    skills: 'MEAN Stack · Angular · HTML · Cascading Style Sheets (CSS) · JavaScript · Photoshop',
    responsibility: "Create and Manage websites, web applications in MERN Stack. Worked in Blockchain based applications. Lead and manage the front-end team. Provided training to the new joiners in MEAN Stack. Some of the general responsibilities are, Worked closely with design and testing team. Focused in bug free production code and eye catching UI visualisation. Managed individual project priorities, deadlines and deliverables.",
    from: 'Jan 2018',
    to: 'Mar 2019',
    duration: '1 year 3 months'
}]

function Experience() {
    return (
        <ExperienceSection>
            <Container maxWidth="xl">
                <Typography textTransform='uppercase' variant='h5' fontWeight='bold' gutterBottom>experience</Typography>

                <Experiences>
                    {
                        EXPERIENCES.map((experience, index) => (
                            <ExperienceItem key={index}>
                                <Grid container>
                                    <Grid item xs={3} style={{ padding: 40, backgroundColor: '#fdd65c' }}>
                                        <Typography textTransform='uppercase' variant='body1' fontSize={13} color='#666'>from</Typography>
                                        <Typography variant='body2' fontWeight='bold' fontSize={14} marginBottom={1} color='#333' gutterBottom>{experience.from}</Typography>
                                        <Typography textTransform='uppercase' variant='body1' fontSize={13} color='#666' gutterBottom>experience</Typography>
                                        <Typography variant='body2' fontWeight='bold' fontSize={16} color='#333' gutterBottom>{experience.to}</Typography>

                                        <Typography variant='body1' fontSize={13} color='#666' marginBottom={4} gutterBottom>({experience.duration})</Typography>

                                        <Typography textTransform='capitalize' variant='h6' fontWeight='bold' color='#333'>
                                            <a href={experience.companyLink} target="_blank" rel='noopener noreferrer'>{experience.company} <OpenInNewIcon style={{ verticalAlign: 'middle' }} /></a>
                                        </Typography>
                                        <Typography textTransform='capitalize' variant='body1' fontSize={13} color='#666' gutterBottom>{experience.location}</Typography>
                                    </Grid>
                                    <Grid item xs={9} style={{ padding: 40, }}>
                                        <Typography textTransform='capitalize' variant='h5' fontWeight='bold' marginBottom={2} gutterBottom>{experience.designation}</Typography>
                                        <Typography gutterBottom>
                                            <Typography textTransform='capitalize' variant='p' fontWeight='bold' color='#333'>used skills: </Typography>
                                            <Typography variant='p' color='#666'>{experience.skills}</Typography>
                                        </Typography>
                                        <Typography gutterBottom>
                                            <Typography textTransform='capitalize' variant='p' fontWeight='bold' color='#333'>Responsibility: </Typography>
                                            <Typography variant='p' color='#666'>{experience.responsibility}</Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ExperienceItem>
                        ))
                    }
                </Experiences>
            </Container>
        </ExperienceSection>
    )
}

export default Experience