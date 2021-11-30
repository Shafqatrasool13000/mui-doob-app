import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <Box sx={{
                justifyContent: { xs: 'center', md: 'normal' }, textAlign: { xs: 'center', md: 'unset' }
            }}>

                <Typography variant='h5' fontWeight='bold'>Contact Us</Typography>
                <Typography variant='h4' fontWeight='bold' my={3}>Get in Touch</Typography>
                <Grid container mb={3} spacing={2} >
                    <Grid item xs={12} sm={6}>
                        <input type="text" className="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="basic-addon1" />
                    </Grid>
                    <Grid item xs={12} sm={6} mb={3}>
                        <input type="text" className="form-control" placeholder="Subject" aria-label="Username" aria-describedby="basic-addon1" />
                    </Grid>
                    <Grid item xs={12} sm={6} mb={3}>
                        <input type="text" className="form-control mx-auto" placeholder="Message Here" aria-label="Username" aria-describedby="basic-addon1" />
                    </Grid>
                </Grid>
                <Button variant="contained">Send Message</Button>

            </Box>
        </>
    )
}

export default ContactUs
