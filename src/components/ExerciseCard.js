import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
          {console.log(exercise.gifUrl)}
       <Stack direction='row'>
          <Button sx={{ 
                  ml: '21px', 
                  color: '#fff', 
                  background: '#53C31E', 
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize'
                  }}>
                    {exercise.bodyPart}
          </Button>
          <Button sx={{ 
                  ml: '21px', 
                  color: '#fff', 
                  background: '#24A549', 
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize'
                  }}>
                    {exercise.target}
          </Button>
        </Stack>
        <Typography 
          ml='21px' 
          color='#000' 
          fontWeight='bold' 
          mt='11px' pb='10px' 
          textTransform='capitalize' 
          fontSize='22px'>

            {exercise.name}

        </Typography>
    </Link>
  )
}

export default ExerciseCard