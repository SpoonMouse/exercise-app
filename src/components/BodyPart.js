import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        mt={2}
        sx={{
              backgroundColor: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              cursor: 'pointer',
              gap: '47px',

            }}
            onClick={() => {
              setBodyPart(item);
              window.scrollTo({ top:1800, left: 100, behavior: 'smooth' })
            }}
            >
        <Typography fontSize='24px' fontWeight='bold' color='#000' textTransform='capitalize' padding="10px">{item}</Typography>
    </Stack>
  )
}

export default BodyPart