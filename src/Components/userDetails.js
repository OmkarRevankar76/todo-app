import React from 'react'
import './userDetails.css'

function UserDetails({ userData, title, Allid }) {
  const { id, name, email } = userData

  return (
    <div className="mainDivUser">
      <h4>User Detail</h4>

      <div className="borderforAll">
        <div className="upperMain">
          <div className="upperOne">
            <p>ToDo ID</p>
            <p>ToDo Title</p>
          </div>
          <div className="upperTwo">
            <p>{Allid}</p>
            <p>{title}</p>
          </div>
        </div>

        <div className="lowerMain">
          <div className="lowerOne">
            <p>User ID</p>
            <p>Name</p>
            <p>Email</p>
          </div>
          <div className="lowerTwo">
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
