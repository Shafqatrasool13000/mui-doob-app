import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BlogsApi from '../api/BlogsApi'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Blog = () => {
    return (
        <>
            <Box sx={{
                textAlign: { xs: 'center', md: 'unset' }
            }} my={5} >
                <Box >
                    <Typography varaint='body1'>Blog Stories</Typography>
                    <Typography variant='h4' fontWeight='bold' my={3}>Check Our News</Typography>
                </Box>
                <Grid container sx={{justifyContent:{xs:'center',md:'normal'}} } spacing={1}>
                    {BlogsApi.map((curE, i) => {
                        return (
                            <Grid item sm={6} md={4} key={i} >
                                <Card sx={{ maxWidth: 345, color: 'white', backgroundColor: 'red', mt: { xs: 3, md: 0 } }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {curE.title}
                                        </Typography>
                                        <Typography variant="body2" color="inherit">
                                            {curE.description}
                                        </Typography>
                                        <Typography variant="body2" color="inherit">
                                            {curE.date}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>)
                    })}
                </Grid>

            </Box>
        </>
    )
}
export default Blog
