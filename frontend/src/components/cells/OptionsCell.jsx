import React from 'react';
import EditUserForm from '../EditUserForm';
import { useNavigate } from "react-router-dom"

const OptionsCell = (props) => {
  const { handleDeleteUser, handleEditUser, isAdmin } = props.context;
  const navigate = useNavigate();

  const onClickDelete = () => {
    handleDeleteUser(props.data.id);
  };

  const onClickEdit = () => {
    handleEditUser(props.data);
  };

  const handleNavigateNotes = () => {
    navigate(`/notes/${props.data.id}`);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      { isAdmin &&
      <div>
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
      }
      <button
        onClick={handleNavigateNotes}
        className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-sm"
      >
        Notes
      </button>
    </div>
  );
};

export default OptionsCell;