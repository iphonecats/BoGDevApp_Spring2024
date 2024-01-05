import React from 'react'
import VolunteerTable from './VolunteerTable'
import { useState, useEffect } from 'react'
import userService from '../services/users'
import AddUserButton from './AddUserForm'

const MainTable = () => {
  const[rowData, setRowData] = useState();

  const handleAddUser = (newUser) => {
    // Adds new user to the existing data
    console.log(newUser.data)
    setRowData((prevData) => [...prevData, newUser.data]);
  };

  useEffect(() => {
    userService
      .getAll()
      .then(res => res.data)
      .then(rowData => setRowData(rowData))
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  return (
    <>
      <VolunteerTable rowData={rowData}/>
      <AddUserButton onAddUser={handleAddUser}/>
    </>
  )
}

export default MainTable