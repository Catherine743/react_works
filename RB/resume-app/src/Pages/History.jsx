import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Link} from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { deleteDownloadHistoryAPI, getDownloadHistoryAPI } from '../services/allAPI'
function History() {

  const [history,setHistory] = useState([])

  const getHistory = async() => {
      try{
        const result = await getDownloadHistoryAPI()
        // console.log(result.data)
        setHistory(result.data)
      }
      catch(err){
        console.log(err);
        
      }
  }
  
  const handleDelete = async(id) => {
    try{
      const result = await deleteDownloadHistoryAPI(id)
      console.log(result);
      getHistory()
      
    }
    catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    getHistory()
  },[])

  console.log(history);
  
  return (
    <div>
      <div>
        <h1 className='text-center mt-5'>Downloaded Resume History</h1>
        <Link to={'/'} style={{ marginTop : '-50px'}} className='float-end me-5'>BACK</Link>
        <Box component="section" className='container-fluid'>
           <div className='row'>
            { history?.length > 0? history.map((item,index) => (
              <div key={index} className='col-md-4'>
               <Paper elevation={3} sx={{ my:5, p:5, textAlign:'center' }}>
                <div className='d-flex align-items-center justify-content-evenly'>
                   <h6>Review At: <br /> {item.timeStamp}</h6>
                   <button onClick={() => handleDelete(item.id)} className='btn text-danger fs-4 ms-5'><MdDelete /></button>
                </div>
                <div className='border rounded p-3'>
                  <img className='img-fluid' src={item.imgUrl} alt="resume" />
                </div>
               </Paper>
            </div>)) : <p>Nothing to display</p> }
           </div>
        </Box>
      </div>
    </div>
  )
}

export default History
