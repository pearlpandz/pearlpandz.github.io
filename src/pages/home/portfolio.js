import React from 'react'
import styled from '@emotion/styled'
import { Container, Typography, Grid } from '@mui/material';

const PortfolioSection = styled.div`
    padding: 50px 0;
    background-color: #ecf1f7;
`;

const Portfolios = styled.div`
    display: flex;
    margin-top: 40px;
`;

const PortfolioItem = styled.div`
    background-color: #ffffff;
    box-shadow: 0 0px 25px 10px rgb(0 0 0 / 9%);
    border-radius: 5px;
    min-height: 270px;
`;

const PortfolioItemContent = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
`;

const Image = styled.a`
    height: 150px;
    width: 100%;
    object-fit: cover;
    background-color: #f7f7f7;
    display: inline-block;

    img {
        height: 100%;
        margin: 0 auto;
        display: block;
    }

`

function Portfolio() {

    const PORTFOLIOS = [{
        title: 'Stackblitz',
        description: 'Check my code playground and some implementation and starters',
        logo: require('./../../assets/images/stackblitz.png'),
        link: 'https://stackblitz.com/@pearlpandz'
    }, {
        title: 'Dribbble',
        description: 'Take a look at my Graphic Designs',
        logo: require('./../../assets/images/dribbble.png'),
        link: 'https://dribbble.com/pearlpandz'
    }, {
        title: 'Behance',
        description: "Let's see some of the visual designs",
        logo: require('./../../assets/images/behance.png'),
        link: 'https://www.behance.net/pearlpandz'
    }, {
        title: 'Github',
        description: 'Check it out my projects and libraries',
        logo: require('./../../assets/images/github.png'),
        link: 'https://github.com/pearlpandz'
    }]

    return (
        <PortfolioSection>
            <Container maxWidth="xl">
                <Typography textTransform='uppercase' variant='h5' fontWeight='bold' gutterBottom>Other Portfolios</Typography>

                <Portfolios>
                    <Grid container>
                        {
                            PORTFOLIOS.map((item, index) => (
                                <Grid item lg={3} sm={6} xs={12} paddingRight={2} key={index} mt={2}>
                                    <PortfolioItem>
                                        <Image href={item.link} target="_blank">
                                            <img src={item.logo} alt={item.title} />
                                        </Image>
                                        <PortfolioItemContent>
                                            <Typography textTransform='capitalize' variant='p' fontWeight='bold' color='#333' marginBottom={1}>
                                                <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                                            </Typography>
                                            <Typography variant='p' color='#666'>{item.description}</Typography>
                                        </PortfolioItemContent>
                                    </PortfolioItem>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Portfolios>

            </Container>

        </PortfolioSection>
    )
}

export default Portfolio