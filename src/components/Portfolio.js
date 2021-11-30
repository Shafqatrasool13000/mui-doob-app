import React from 'react'
import PortfolioApi from '../api/PortfolioApi'
import Typography from '@mui/material/Typography';
import PicSide from './PicSide';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const Portfolio = () => {
    return (
        <Box my={5} sx={{
            textAlign:{xs:'center',md:'start'}
        }} >
            <Typography variant='h4' fontWeight='bold'  my={3}>See some of our <br /> Creative Work</Typography>
            <Grid container spacing={3} sx={{
                justifyContent:{xs:'center',md:'normal'}
            }}>
                {PortfolioApi.map((curE, i) => {
                    return (
                        <Grid item sm={6} md={4} key={i}>
                            <PicSide img='images/box.png' />
                        </Grid>)
                })}
            </Grid>
        </Box>
    )
}
export default Portfolio
