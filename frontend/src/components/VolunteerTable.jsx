import React from 'react'
import ImgCell from './cells/ImgCell';
import StatusCell from './cells/StatusCell';
import OptionsCell from './cells/OptionsCell';
import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import EditUserForm from './EditUserForm';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const VolunteerTable = ({rowData, handleDeleteUser, handleUpdateUser}) => {
  const [colDefs] = useState([
      { field: 'name', flex: 15},
      { headerName: 'Profile Picture', field: 'avatar', cellRenderer: ImgCell, flex: 10 },
      { field: 'phone', flex: 10 },
      { field: 'email', flex: 10 },
      { field: 'rating', flex: 5 },
      { field: 'status', cellRenderer: StatusCell, flex: 5 },
      { headerName: 'Hero Project', field: 'hero_project', flex: 10 },
      { field: 'options', cellRenderer: OptionsCell, flex : 10, autoHeight: true}
      ]);

  const [editUser, setEditUser] = useState(null);
  const [editFormVisible, setEditFormVisible] = useState(false);

  const handleEditUser = (user) => {
    setEditUser(user);
    setEditFormVisible(true);
  };

  const handleSaveEdit = (editedUser) => {
    handleUpdateUser(editedUser, editedUser.id)
    setEditFormVisible(false);
    setEditUser(null);
  };
  
  //used to pass functions and state to cell renderer
  const context = {
    handleDeleteUser: handleDeleteUser,
    handleEditUser: handleEditUser,
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <AgGridReact 
        rowData={rowData} 
        columnDefs={colDefs} 
        className="ag-theme-quartz"
        context = {context}
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