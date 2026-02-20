import * as React from 'react';
import Box from '@mui/material/Box';
import { FaEdit } from 'react-icons/fa'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Edit({resumeId}) {
  console.log(resumeId);
  
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
                <TextField id="standard-basic" label="Full Name" variant="standard" />
                <TextField id="standard-basic" label="Job Title" variant="standard" />
                <TextField id="standard-basic" label="Location" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Phone Number" variant="standard" />
                <TextField id="standard-basic" label="Github Profile Link" variant="standard" />
                <TextField id="standard-basic" label="LinkedIn Profile Link" variant="standard" />
                <TextField id="standard-basic" label="Portfolio Link" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Education Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Course Name" variant="standard" />
                <TextField id="standard-basic" label="College Name" variant="standard" />
                <TextField id="standard-basic" label="University" variant="standard" />
                <TextField id="standard-basic" label="Year of Passout" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Professional Details</h3>
              <div className='d-flex row p-3'>
                <TextField id="standard-basic" label="Job or Internship" variant="standard" />
                <TextField id="standard-basic" label="Company Name" variant="standard" />
                <TextField id="standard-basic" label="Location" variant="standard" />
                <TextField id="standard-basic" label="Duration" variant="standard" />
              </div>
            </div>
            {/* skills */}
            <h3>Skills</h3>
            <div className='d-flex justify-content-between align-items-center m-3'>
              <input type="text" className='form-control' placeholder='Add skills' />
              <Button className='me-3' variant="text" sx={{ maxWidth: '40px' }}>Add</Button>
            </div>
            {/* added skills */}
            <h5>Added skills : </h5>
            <div className='d-flex justify-content-between'>
              <span className='btn btn-primary d-flex align-items-center justify-content-center'>
                Skill<button className='btn text-light'>X</button>
              </span>
            </div>
            <div>
              <h3>Professional Summary</h3>
              <div className='d-flex row p-3 flex-wrap'>
                <TextField
                  id="standard-multiline-static"
                  label="Write a short summary of yourself"
                  multiline
                  rows={4}
                  variant="standard"
                />
              </div>
            </div>
          </Typography>
          <Button className='me-3' variant="text" sx={{ maxWidth: '40px' }}>Update</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
