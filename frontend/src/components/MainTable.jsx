import React from 'react'
import VolunteerTable from './VolunteerTable'
import { useState, useEffect } from 'react'

const MainTable = () => {
  const[rowData, setRowData] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/api/bog/users')
      .then(res => res.json())
      .then(rowData => setRowData(rowData))
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  return (
    <>
      <VolunteerTable rowData={rowData}/>
    </>
  )
}

export default MainTable