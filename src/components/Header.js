import { Grid, Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PicSide from "./PicSide";

const Header = () => {
    return (
        <>
            <Box sx={{
                my: { md: 4, sm: 2 }
            }} p={3} borderRadius={4} boxShadow={1} >
                <Grid container container sx={{
                    alignItems:{xs:'noramal', md:'center'},
                    justifyContent: { xs: 'center', md: 'normal' }, textAlign: { xs: 'center', md: 'unset' }
                }} >
                    <Grid item md={6}>
                        <Box>
                            <Typography variant='h3' fontWeight='bold'>The Spirit of  <br /> Digital Agency
                            </Typography>
                        </Box>
                        <Box my={3}>
                            <Typography variant='p'>
                                Lorem, ipsum dolor. Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                        </Box>
                        <Button variant="contained" >
                            More About us
                        </Button>
                        <Link href='/' underline='none' fontWeight='bold' ml={3}>Get in touch</Link>
                    </Grid>
                    <Grid item sx={{
                        mt: { xs: 3, md: 0 },
                    }} md={6}>
                        <PicSide img="./images/header.png" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Header;
