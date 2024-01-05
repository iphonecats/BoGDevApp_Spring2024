import React from 'react'
import VolunteerTable from './VolunteerTable'
import { useState, useEffect } from 'react'
import userService from '../services/users'
import AddUserButton from './AddUserForm'

const MainTable = () => {
  const[rowData, setRowData] = useState();

  const handleAddUser = (newUser) => {
    // Adds new user to the existing data
    setRowData((prevData) => [...prevData, newUser.data]);
  };

  const handleDeleteUser = (id) => {
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


  useEffect(() => {
    userService
      .getAll()
      .then(res => res.data)
      .then(rowData => setRowData(rowData))
  }, [])
  return (
    <>
      <VolunteerTable rowData={rowData} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser}/>
      <AddUserButton onAddUser={handleAddUser}/>
    </>
  )
}

export default MainTable