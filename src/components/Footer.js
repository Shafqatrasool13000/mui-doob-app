import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{color:'white',backgroundColor:'blue',p:5,mt:4}}>
            <Typography variant='h3' align='center'>Doob</Typography>
            <Typography variant='h2' sx={{textTransform:'capitalize',textAlign:'center'}}>creativity Above</Typography>
            <Grid container alignItems='center' justifyContent='center'>
                <ul className='footer' >
                    <li>Home.</li>
                    <li>Key Features.</li>
                    <li>Terminal.</li>
                    <li>pricing.</li>
                    <li>FAQ.</li>
                </ul>
                <ul className='footer icons-footer'>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                </ul>
            </Grid>

            <Typography variant='body1' align='center'>Copyright© Arifur Rahman Tushar 2021. All rights reserved</Typography>
        </Box>
    )
}

export default Footer
