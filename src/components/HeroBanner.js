import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
import './All.css';



const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position='relative' p='20px' >
        <Typography className='font' color='#168516' fontWeight='600' fontSize='26px' >
            Fitness Club
        </Typography>
        <Typography className='font' fontWeight='700'  sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mb='23px' mt='30px'
        >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
           Check out the most effective exercises 
        </Typography>
        <Button className='font' variant='contained' color='error' href='#exercises'
         sx={{
           ':hover': {
            backgroundColor: '#24A549'
           },
           backgroundColor: '#168516',
           padding: '10px'
        }}
        >Explore Exercises</Button>
        <Typography
            fontWeight={600} color='#168516'
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }} fontSize="200px"
        >
          Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner