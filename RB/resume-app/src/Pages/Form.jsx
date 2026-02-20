import React from 'react'
import Preview from '../Components/Preview'
import Steps from '../Components/Steps'
import { useState } from 'react'
function Form() {

  const [userInput, setUserInput] = useState({ // state 
    personalDetails: { // This will go to JSON server
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedIn: "",
      portfolio: ""
    },
    educationDetails: {
      course: "",
      college: "",
      university: "",
      year: ""
    },
    experience: {
      job: "",
      company: "",
      jobLocation: "",
      duration: ""
    },
    skills: [],
    summary: ""
  })

  const [finish, setFinish] = useState(false)

  const [resumeId, setResumeId] = useState()
  return (
    <div>
      <div className='row p-5'>
        {finish ? <div className='row'>
          <div className='col-3'>
          </div>

          <div className='col-8'>
            <Preview userInput={userInput} finish={finish} setUserInput={setUserInput} resumeId={resumeId} />
          </div>

          <div className='col-1'>
          </div>
        </div>

        :

          <div className='row p-5'>
            <div className='col-6'>
              <Steps userInput={userInput} setUserInput={setUserInput} setFinish={setFinish} setResumeId={setResumeId}/>
            </div>
            <div className='col-6'>
              <Preview userInput={userInput} />
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Form
