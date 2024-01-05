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
    setRowData(rowData.filter(user => user.id !== id))
    userService
      .remove(id)
      .catch(error => console.error('Error deleting user:', error))
  }

  useEffect(() => {
    userService
      .getAll()
      .then(res => res.data)
      .then(rowData => setRowData(rowData))
      .catch(error => console.error('Error fetching users:', error))
  }, [])
  return (
    <>
      <VolunteerTable rowData={rowData} handleDeleteUser={handleDeleteUser}/>
      <AddUserButton onAddUser={handleAddUser}/>
    </>
  )
}

export default MainTable