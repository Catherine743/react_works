import React from 'react'

function User({uName,userAge,userEmail,userPhone}) {
  console.log(uName);
  
  return (
    <div>
        <ul>
          <li>Username:{uName}</li>
          <li>Age:{userAge}</li>
          <li>Email:{userEmail}</li>
          <li>Phone:{userPhone}</li>
        </ul>
    </div>
  )
}

export default User
