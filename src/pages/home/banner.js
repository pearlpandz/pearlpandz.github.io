import styled from '@emotion/styled'
import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react'


import BGImage from './../../assets/images/mountain.png'
import ProfileImage from './../../assets/images/profilepic.jpg'

const BannerBG = styled.div`
  background: url(${BGImage}) no-repeat right bottom;
  // opacity: 0.5;
  background-size: auto 300px;
`;

const BannerSection = styled.div`
  background: rgb(0 0 0 / 85%);
  color: #fff;
  padding: 75px 0 0 0;
`;

const Image = styled.img`
  object-fit: contain;
  border: 10px solid #fff;
  position: absolute;
  top: 30px;
  height: 500px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 0px 30px 15px rgb(0 0 0 / 15%);
  background-color: #fff;
`;

function Banner() {
  return (
    <BannerBG>
      <BannerSection>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid xs={3} position='relative'>
              <Image src={ProfileImage} alt="author | Muthupandi" />
            </Grid>
            <Grid xs={9} padding={2}>
              <Box style={{padding: '50px 0 50px 50px'}}>
                <Typography variant="h2" fontWeight='bold' color='#fdd65c'>Muthupandi V</Typography>
                <Typography variant="h5" mb={3} gutterBottom>Application Development Senior Analyst</Typography>
                <Typography variant="body2" fontWeight='500' textTransform="uppercase" color="#a5abb5" gutterBottom>Location: Chennai</Typography>
                <Typography variant="body2" fontWeight='500' textTransform="uppercase" color="#a5abb5" mb={3} gutterBottom>{'Information & Technology Services'}</Typography>
                <Typography fontWeight='bold' gutterBottom>Previous: <Typography variant='p' fontWeight='normal'>Software Engineer</Typography></Typography>
                <Typography fontWeight='bold' gutterBottom>Education: <Typography variant='p' fontWeight='normal'>Bachelor of Engineering</Typography></Typography>
              </Box>
            </Grid>

          </Grid>


        </Container>
      </BannerSection>
    </BannerBG>
  )
}

export default Banner