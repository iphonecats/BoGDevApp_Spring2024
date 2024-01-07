import React from 'react';

//cell renderer for the status column
function StatusCell({ value }) {
  return (
    <>
      {value ? (
        <p className="text-green-500">Active</p>
      ) : (
        <p className="text-red-500">Inactive</p>
      )}
    </>
  );
}

export default StatusCell;