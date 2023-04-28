import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {id} = useParams();
  return (
    <div><p>This Student Id of user is {id}</p></div>
  )
}

export default Profile