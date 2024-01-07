import React from 'react'
import VolunteerTable from './VolunteerTable'
import { useState, useEffect } from 'react'
import userService from '../services/users'
import AddUserButton from './AddUserForm'
import { useNavigate } from "react-router-dom"

//Main table handles all the components on the screen
const MainTable = ({isAdmin}) => {
  const[rowData, setRowData] = useState();
  const navigate = useNavigate();

  const handleAddUser = (newUser) => {
    // Adds new user to the existing data
    setRowData((prevData) => [...prevData, newUser.data]);
  };

  const handleDeleteUser = (id) => {
    // sends DELETE request to delete in the backend
    userService.remove(id)
    setRowData(rowData.filter(user => user.id !== id))
  }

  const handleUpdateUser = (updatedUser, id) => {
    //sends PUT request to update the user in the backend
    userService.update(id, updatedUser)
    setRowData(rowData.map( user => {
      if (id === user.id) {
        return updatedUser
      } else {
        return user
      }
    }))
  }

  const handleEnterAdmin = () => {
    navigate(`/admin/`);
  }


  useEffect(() => {
    // sends GET request to grab users from backend
    userService
      .getAll()
      .then(res => res.data)
      .then(rowData => setRowData(rowData))
  }, [])
  //add user button shows only in admin mode
  return (
    <>
      <div className="flex items-center justify-center p-2">
        <h1 className="text-center font-black text-4xl">Haha Heroes Volunteers</h1>
      </div>

      {!isAdmin &&
      <div className="flex flex-col items-center justify-center">
        <button onClick={handleEnterAdmin} className="bg-blue-500 text-white py-2 px-4 rounded">
        Enter Admin Mode
        </button>
      </div>
      }
      {isAdmin && <AddUserButton onAddUser={handleAddUser}/>}
      <p className='italic flex pl-3'>press on column title to sort asc/desc</p>
      <VolunteerTable 
        rowData={rowData} 
        handleDeleteUser={handleDeleteUser} 
        handleUpdateUser={handleUpdateUser}
        isAdmin = {isAdmin}
      />
    </>
  )
}

export default MainTable