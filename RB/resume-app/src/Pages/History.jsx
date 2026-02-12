import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Link} from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
function History() {
  return (
    <div>
      <div>
        <h1 className='text-center mt-5'>Downloaded Resume History</h1>
        <Link to={'/'} style={{ marginTop : '-50px'}} className='float-end me-5'>BACK</Link>
        <Box component="section" className='container-fluid'>
           <div className='row'>
            <div className='col-md-4'>
               <Paper elevation={3} sx={{ my:5, p:5, textAlign:'center' }}>
                <div className='d-flex align-items-center justify-content-evenly'>
                   <h6>Review At: <br /> timeStamp</h6>
                   <button className='btn text-danger fs-4 ms-5'><MdDelete /></button>
                </div>
                <div className='border rounded p-3'>
                  <img className='img-fluid' src="" alt="resume" />
                </div>
               </Paper>
            </div>
           </div>
        </Box>
      </div>
    </div>
  )
}

export default History
