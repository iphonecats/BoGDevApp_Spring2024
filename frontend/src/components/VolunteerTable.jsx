import React from 'react'
import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const VolunteerTable = ({rowData}) => {
  const [colDefs] = useState([
      { field: 'name' },
      { headerName: 'Profile Picture', field: 'profile_picture' },
      { field: 'phone' },
      { field: 'email' },
      { field: 'rating' },
      { field: 'status' },
      { headerName: 'Hero Project', field: 'hero_project' }
      ]);
  return (
    <div className="ag-theme-quartz" style={{height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs}/>
    </div>
  )
}

export default VolunteerTable