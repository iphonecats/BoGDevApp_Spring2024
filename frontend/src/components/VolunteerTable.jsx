import React from 'react'
import ImgCell from './cells/ImgCell';
import StatusCell from './cells/StatusCell';
import OptionsCell from './cells/OptionsCell';
import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import EditUserForm from './EditUserForm';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const VolunteerTable = ({rowData, handleDeleteUser, handleUpdateUser, isAdmin}) => {
  const [colDefs] = useState([
      { field: 'name', flex: 12},
      { headerName: 'Profile Picture', field: 'avatar', cellRenderer: ImgCell, flex: 12 },
      { field: 'phone', flex: 10 },
      { field: 'email', flex: 10 },
      { field: 'rating', flex: 5 },
      { field: 'status', cellRenderer: StatusCell, flex: 5 },
      { headerName: 'Hero Project', field: 'hero_project', flex: 7 },
      { field: 'options', cellRenderer: OptionsCell, flex : 10, autoHeight: true},
      { headerName: 'Clicks', field: 'clickCount', flex: 5 },
      ]);

  const [editUser, setEditUser] = useState(null);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [clickCounts, setClickCounts] = useState({});

  const handleEditUser = (user) => {
    setEditUser(user);
    setEditFormVisible(true);
  };

  const handleSaveEdit = (editedUser) => {
    handleUpdateUser(editedUser, editedUser.id)
    setEditFormVisible(false);
    setEditUser(null);
  };

  const handleRowClick = (params) => {
    const user = params.data;
    
    // Update the click count for the clicked row using the user's ID
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [user.id]: (prevCounts[user.id] || 0) + 1,
    }));
  };

  // adds clickCounts to rowData
  const changedRowData = rowData ? rowData.map((user) => ({
    ...user,
    clickCount: clickCounts[user.id] || 0,
  })) : [];
  
  //used to pass functions and state to cell renderer
  const context = {
    handleDeleteUser: handleDeleteUser,
    handleEditUser: handleEditUser,
    isAdmin: isAdmin
  };

  //adjust table size based on admin mode
  const height = isAdmin ? '889px' : '519px';

  return (
    <div style={{ height: height, width: '100%' }}>
      <AgGridReact 
        rowData={changedRowData} 
        columnDefs={colDefs} 
        className="ag-theme-quartz"
        context = {context}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30]}
        onRowClicked={(params) => handleRowClick(params)}
      />
      {editUser && editFormVisible && (
        <EditUserForm
          user={editUser}
          onSave={handleSaveEdit}
          onCancel={() => {
            setEditFormVisible(false);
            setEditUser(null);
          }}
        />
      )}
    </div>
  )
}

export default VolunteerTable