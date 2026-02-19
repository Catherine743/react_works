import React, { useState } from 'react'
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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { addDownloadHistoryAPI } from '../services/allAPI';
function Preview({userInput, finish}) {
  // console.log(userInput);
  const [downloadStatus, setDownloadStatus] = useState(false)
  // download-resume
  const downloadCV = async() => {
    // to get screenshot
    const input = document.getElementById('result')
    const canvas = await html2canvas(input,{scale : 2})
    const imgUrl = canvas.toDataURL("image/png")

    // to create pdf
    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('resume.pdf')

    // getDate
    const localTimeandDate = new Date()
    const timeStamp = `${localTimeandDate.toLocaleDateString()},${localTimeandDate.toLocaleTimeString()}` 

    // proceed to API call to add downloadHistory
    try{
      const result = await addDownloadHistoryAPI({...userInput, imgUrl, timeStamp})
      console.log(result);
      setDownloadStatus(true)
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      { userInput.personalDetails.name != "" && <div className='flex-column' style={{marginTop : "100px"}}>
        { finish && <div className='d-flex justify-content-end align-items-center'>
          {/* download */}
          <button onClick={downloadCV} className='btn fs-3 text-primary'><FaFileDownload/></button>
          {/* edit */}
          <div><Edit /></div>
          {/* history */ }
          {downloadStatus && <Link to= {'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>}
          {/* back */ }
          <Link to= {'/resume-generator'} className='btn text-primary'>Back</Link>
        </div> }
        <Box>
          <Paper elevation={5} id='result'>
            <Typography variant="h4" component="h2" align='center'>
              <h2>Name: {userInput.personalDetails.name}</h2>
            </Typography>
            <Typography variant="subtitle1" color='#00b0ff' align='center'>
              <p>Job Title: {userInput.personalDetails.jobTitle}</p>
            </Typography>
            <Typography variant="body2" align='center'>
              {userInput.personalDetails.location} | {userInput.personalDetails.email} | {userInput.personalDetails.phone}
            </Typography>
            <Typography variant="body2" align='center' mb={4}>
              <Link href={userInput.personalDetails.github} target="_blank">GitHub</Link> | 
              <Link href={userInput.personalDetails.linkedIn} target="_blank">LinkedIn</Link> | 
              <Link href={userInput.personalDetails.portfolio} target="_blank">Portfolio</Link>
            </Typography>
            <Divider>Summary</Divider>
            <div className='container-fluid d-flex'>
                <p>{userInput.summary}</p>
            </div>
            <Divider>Education</Divider>
            <Typography variant='h5' align='center'>
                <h5>{userInput.educationDetails.course}</h5>
                <p><span>{userInput.educationDetails.college}</span> | <span>{userInput.educationDetails.university}</span> | <span>{userInput.educationDetails.year}</span></p>
            </Typography>
            <Divider>Professional Experience</Divider>
            <Typography variant='h6' align='center'>
                <h5>{userInput.experience.job}</h5>
                <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
            </Typography>
            <Divider>Skills</Divider>
            <Stack spacing={2} direction="row" sx={{ flexWrap : 'wrap', gap : '10px', padding : '10px'}}>
              {userInput.skills.map(skill => <Button variant="contained">{skill}</Button>)}
            </Stack>
          </Paper>
        </Box>
      </div> }
    </div>
  )
}

export default Preview
