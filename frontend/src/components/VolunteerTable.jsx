import React from 'react'
import ImgCell from './cells/ImgCell';
import StatusCell from './cells/StatusCell';
import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const VolunteerTable = ({rowData}) => {
  const [colDefs] = useState([
      { field: 'name', flex: 15},
      { headerName: 'Profile Picture', field: 'avatar', cellRenderer: ImgCell, flex: 10 },
      { field: 'phone', flex: 10 },
      { field: 'email', flex: 10 },
      { field: 'rating', flex: 5 },
      { field: 'status', cellRenderer: StatusCell, flex: 5 },
      { headerName: 'Hero Project', field: 'hero_project', flex: 10 }
      ]);
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} className="ag-theme-quartz"/>
    </div>
  )
}

export default VolunteerTable