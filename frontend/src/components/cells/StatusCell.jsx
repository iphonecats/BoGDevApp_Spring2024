import React from 'react';

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