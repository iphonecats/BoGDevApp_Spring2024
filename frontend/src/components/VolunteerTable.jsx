import React from 'react'
import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const VolunteerTable = ({rowData}) => {
  const [colDefs] = useState([
      { field: 'name', flex: 10},
      { headerName: 'Profile Picture', field: 'profile_picture', flex: 10 },
      { field: 'phone', flex: 10 },
      { field: 'email', flex: 10 },
      { field: 'rating', flex: 10 },
      { field: 'status', flex: 10 },
      { headerName: 'Hero Project', field: 'hero_project', flex:10 }
      ]);
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} className="ag-theme-quartz"/>
    </div>
  )
}

export default VolunteerTable