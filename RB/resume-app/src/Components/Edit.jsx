import * as React from 'react';
import Box from '@mui/material/Box';
import { FaEdit } from 'react-icons/fa'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { editResumeAPI, getAResumeAPI } from '../services/allAPI';
import {useEffect,useState} from 'react';
import  swal  from 'sweetalert';
function Edit({resumeId, setUpdateResume}) {
  // console.log(resumeId);
  const [userInput, setUserInput] = useState({})
  const[userSkill,setUserSkill] = useState("") // to add skill 
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: "80vh",
    overflowY: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //getEditResumeDetails

  const getEditResumeDetails = async() => {
    try{
      const result = await getAResumeAPI(resumeId);
      // console.log(result);
      setUserInput(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }

  useEffect(() => {
    getEditResumeDetails()
  },[])
  
  // addSkill
  const addSkill = (userSkill) => {
    if (userSkill) {
      if (userInput.skills.includes(userSkill)) {
        alert("Skill already exists")
      }
      else {
        setUserInput({ ...userInput, skills: [...userInput.skills, userSkill] })
      }
    }
  }

  // removeSkill
  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skill) })
  }
  
  // handleUpdate Resume

  const handleUpdateResume = async() => {
    try{
      const result = await editResumeAPI(userInput?.id, userInput);
      // console.log(result);
      setUpdateResume(result.data)
      swal("Success", "Resume Updated", "success")
      handleClose()
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>
      <button onClick={handleOpen} className='btn text-primary fs-2'><FaEdit /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h3>Personal Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, name: e.target.value } })} value={userInput?.personalDetails?.name}/>
                <TextField id="standard-basic" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, jobTitle: e.target.value } })} value={userInput?.personalDetails?.jobTitle}/>
                <TextField id="standard-basic" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, location: e.target.value } })} value={userInput?.personalDetails?.location}/>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, email: e.target.value } })} value={userInput?.personalDetails?.email}/>
                <TextField id="standard-basic" label="Phone Number" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, phone: e.target.value } })} value={userInput?.personalDetails?.phone}/>
                <TextField id="standard-basic" label="Github Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, github: e.target.value } })} value={userInput?.personalDetails?.github}/>
                <TextField id="standard-basic" label="LinkedIn Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, linkedIn: e.target.value } })} value={userInput?.personalDetails?.linkedIn}/>
                <TextField id="standard-basic" label="Portfolio Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, portfolio: e.target.value } })} value={userInput?.personalDetails?.portfolio}/>
              </div>
            </div>
            <div>
              <h3>Education Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationDetails: { ...userInput.educationDetails, course: e.target.value } })} value={userInput?.educationDetails?.course}/>
                <TextField id="standard-basic" label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationDetails: { ...userInput.educationDetails, college: e.target.value } })} value={userInput?.educationDetails?.college}/>
                <TextField id="standard-basic" label="University" variant="standard" onChange={e => setUserInput({ ...userInput, educationDetails: { ...userInput.educationDetails, university: e.target.value } })} value={userInput?.educationDetails?.university}/>
                <TextField id="standard-basic" label="Year of Passout" variant="standard" onChange={e => setUserInput({ ...userInput, educationDetails: { ...userInput.educationDetails, year: e.target.value } })} value={userInput?.educationDetails?.year}/>
              </div>
            </div>
            <div>
              <h3>Professional Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Job or Internship" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, job: e.target.value } })} value={userInput?.experience?.job}/>
                <TextField id="standard-basic" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput?.experience?.company}/>
                <TextField id="standard-basic" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput?.experience?.jobLocation}/>
                <TextField id="standard-basic" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput?.experience?.duration}/>
              </div>
            </div>
            {/* skills */}
            <h3>Skills</h3>
            <div className='d-flex justify-content-between align-items-center m-3'>
              <input type="text" className='form-control' placeholder='Add skills' onChange={e => setUserSkill(e.target.value)} value={userSkill}/>
              <Button onClick={() => addSkill(userSkill)} className='me-3' variant="text" sx={{ maxWidth: '40px' }}>Add</Button>
            </div>
            {/* added skills */}
            <h5>Added skills : </h5>
            <div className='d-flex justify-content-between'>
              {userInput?.skills?.map(skill => (<span className='btn btn-primary d-flex align-items-center justify-content-center'>
                {skill}<button onClick={() => removeSkill(skill)} className='btn text-light'>X</button>
              </span>))}
            </div>
            <div>
              <h3>Professional Summary</h3>
              <div className='d-flex row p-3 flex-wrap'>
                <TextField
                  onChange={e => setUserInput({ ...userInput, summary: e.target.value })}
                  id="standard-multiline-static"
                  label="Write a short summary of yourself"
                  multiline
                  rows={4}
                  variant="standard"
                  value={userInput?.summary}/>
              </div>
            </div>
          </Typography>
          <Button className='me-3' onClick={handleUpdateResume} variant="text" sx={{ maxWidth: '40px' }}>Update</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
