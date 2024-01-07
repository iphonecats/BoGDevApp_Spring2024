import React from 'react'
import VolunteerTable from './VolunteerTable'
import { useState, useEffect } from 'react'
import userService from '../services/users'
import AddUserButton from './AddUserForm'
import { useNavigate } from "react-router-dom"

const MainTable = ({isAdmin}) => {
  const[rowData, setRowData] = useState();
  const navigate = useNavigate();

  const handleAddUser = (newUser) => {
    // Adds new user to the existing data
    setRowData((prevData) => [...prevData, newUser.data]);
  };

  const handleDeleteUser = (id) => {
    // sends request to delete in the backend
    userService.remove(id)
    setRowData(rowData.filter(user => user.id !== id))
  }

  const handleUpdateUser = (updatedUser, id) => {
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
    userService
      .getAll()
      .then(res => res.data)
      .then(rowData => setRowData(rowData))
  }, [])
  return (
    <>
      <div className="flex items-center justify-center font-black text-4xl p-3">
        <h1 className="text-center">Hero Volunteers</h1>
      </div>
      {!isAdmin &&
      <div className="flex flex-col items-center justify-center">
        <button onClick={handleEnterAdmin} className="bg-blue-500 text-white py-2 px-4 rounded">
        Enter Admin Mode
        </button>
      </div>
      }
      {isAdmin && <AddUserButton onAddUser={handleAddUser}/>}
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