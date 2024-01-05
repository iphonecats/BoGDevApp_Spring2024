import React from 'react';

const OptionsCell = (props) => {
  const onClickDelete = () => {
    props.context.handleDeleteUser(props.data.id);
  };

  return (
    <div className="flex items-center justify-center">
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