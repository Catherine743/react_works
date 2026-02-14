import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import Edit from './Edit';
function Preview() {
  return (
    <div>
      <div className='flex-column' style={{marginTop : "100px"}}>
        <div className='d-flex justify-content-end align-items-center'>
          {/* download */}
          <button className='btn fs-3 text-primary'><FaFileDownload/></button>
          {/* edit */}
          <div><Edit /></div>
          {/* history */ }
          <Link to= {'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
          {/* back */ }
          <Link to= {'/resume-generator'} className='btn text-primary'>Back</Link>
        </div>
        <Box>
          <Paper elevation={5} id='result'>
            <Typography variant="h4" component="h2" align='center'>
              <h2>Name: </h2>
            </Typography>
            <Typography variant="subtitle1" color='#00b0ff' align='center'>
              <p>Job Title: </p>
            </Typography>
            <Typography variant="body2" align='center'>
              Location | Email | Phone
            </Typography>
            <Typography variant="body2" align='center' mb={4}>
              <Link href="" target="_blank">GitHub</Link> |
              <Link href="" target="_blank">LinkedIn</Link> |
              <Link href="" target="_blank">Portfolio</Link>
            </Typography>
            <Divider>Summary</Divider>
            <div className='container-fluid d-flex'>
                <p>Summary</p>
            </div>
            <Divider>Education</Divider>
            <Typography variant='h5' align='center'>
                <h5>Course</h5>
                <p><span>College</span> | <span>University</span> | <span>Year</span></p>
            </Typography>
            <Divider>Professional Experience</Divider>
            <Typography variant='h6' align='center'>
                <h5>Experience</h5>
                <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
            </Typography>
            <Divider>Skills</Divider>
            <Stack spacing={2} direction="row" sx={{ flexWrap : 'wrap', gap : '10px', padding : '10px'}}>
              <Button variant="contained">Skill</Button>
            </Stack>
          </Paper>
        </Box>
      </div>
    </div>
  )
}

export default Preview
