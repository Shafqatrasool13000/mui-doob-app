import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PicSide from './PicSide'


const About = () => {
    return (
        <>
            <Box sx={{
                my: { xs: 2, md: 4 }
            }} my={4} boxShadow={2} p={3} borderRadius={2} >
                <Grid container sx={{
                    alignItems:{xs:'normal',md:'center'},justifyContent:{xs:'center',md:'normal'}
                }} >
                    <Grid item md={6}>
                        <PicSide img="./images/about.png" />
                    </Grid>
                    <Grid item md={6} sx={{textAlign:{xs:'center',md:'unset'}}}>
                        <Box sx={{ my: { xs: 3, md: 'unset' } }}>
                            <Typography variant='h5' fontWeignt='bold'>OUR COMPANY</Typography>
                        </Box>
                        <Typography variant='h3' fontWeight='bold'>Some Fine <br /> Words About Us</Typography>
                        <Typography variant='body1' sx={{
                            display:{xs:'inline',md:'none'}
                        }}> 
                            Lorem, ipsum dolor. Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia incidunt iure.
                        </Typography>
                        <Grid container justifyContent='space-between'  fontSize={70}>
                            <Box component='p' >&#8592;</Box>
                            <Box component='p'>
                                &#8594;
                            </Box>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>


    )
}

export default About
