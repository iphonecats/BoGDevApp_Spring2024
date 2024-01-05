import React from 'react';
import EditUserForm from '../EditUserForm';

const OptionsCell = (props) => {
  const { handleDeleteUser, handleEditUser } = props.context;

  const onClickDelete = () => {
    handleDeleteUser(props.data.id);
  };

  const onClickEdit = () => {
    handleEditUser(props.data);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={onClickEdit}
        className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 text-sm"
      >
        Edit
      </button>
      <button
        onClick={onClickDelete}
        className="bg-gray-300 text-red-500 py-1 px-2 rounded hover:bg-gray-400 text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default OptionsCell;