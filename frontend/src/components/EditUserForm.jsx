import React, { useState, useEffect } from 'react';

const EditUserForm = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    setEditedUser({ ...user });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    //if type is checkbox it converts to be true or false
    const newValue = type === 'checkbox' ? checked : value;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: newValue,
    }));
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center overflow-auto">
      <div className="bg-white p-2 rounded shadow-md w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            className="border p-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Avatar:
          <input
            type="text"
            name="avatar"
            value={editedUser.avatar}
            onChange={handleInputChange}
            className="border p-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Hero Project:
          <input
            type="text"
            name="hero_project"
            value={editedUser.hero_project}
            onChange={handleInputChange}
            className="border p-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Notes:
          <textarea
            name="notes"
            value={editedUser.notes}
            onChange={handleInputChange}
            className="border p-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Email:
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            className="border p-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Phone:
          <input
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={handleInputChange}
            className="border p-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Rating:
          <input
            type="text"
            name="rating"
            value={editedUser.rating}
            onChange={handleInputChange}
            className="border p-2 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Status:
          <input
            type="checkbox"
            name="status"
            checked={editedUser.status}
            onChange={handleInputChange}
            className="mt-1"
          />
          {editedUser.status ? ' Active' : ' Inactive'}
        </label>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-400 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;