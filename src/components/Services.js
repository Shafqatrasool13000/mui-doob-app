import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ServicesApi from '../api/ServicesApi'

const Anything = () => {
    return (
        <Box sx={{
           my:{xs:0,md:3} 
        }} >
            <Grid container justifyContent='center' alignItems='center' sx={{
                textAlign:{xs:'center',md:'none'}
            }} spacing={2}>
                <Grid sm={6} md={4} >
                    <Typography variant='h3' fontWeight='bold'>Anything you  need,we 've got you covered</Typography>
                    <Box mt={3}>
                        <Button variant="contained" >
                            Get in Touch
                        </Button>
                    </Box>
                </Grid>
                {ServicesApi.map((curE, i) => {
                    return (<Grid sm={6} md={4} key={i} sx={{justifySelf:{sm:'flex-start',md:'none'},mt:{xs:3,md:0}}}> 
                        <img src={curE.img}  alt="Network" />
                        <Typography variant='body1' fontWeight='bold' mt={3} >{curE.title}</Typography>
                        <Typography variant='body1' mt={2}>{curE.subtitle}</Typography>
                    </Grid>)
                })}
            </Grid>
        </Box>
    )
}

export default Anything
