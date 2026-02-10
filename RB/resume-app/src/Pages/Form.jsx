import React from 'react'
import Preview from '../Components/Preview'
import Steps from '../Components/Steps'
function Form() {
  return (
    <div>
      <div className='row p-5'>
          {/* <div className='row'>
            <div className='col-3'>
            </div>

            <div className='col-8'>
                <Preview />
            </div>

            <div className='col-1'>
            </div>
          </div> */}

          <div className='row p-5'>
              <div className='col-6'>
                  <Steps />
              </div>
              <div className='col-6'>
                  <Preview />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Form
