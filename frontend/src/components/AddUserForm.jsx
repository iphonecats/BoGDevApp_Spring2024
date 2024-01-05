import React, { useState } from 'react';
import userService from '../services/users'

const AddUserButton = ({onAddUser}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    hero_project: '',
    notes: '',
    email: '',
    phone: '',
    rating: '',
    status: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Sends request to add user
    userService.create(formData)
      .then((newUser) => {
        onAddUser(newUser);
        //Resets and hides form
        setFormData({
          name: '',
          avatar: '',
          hero_project: '',
          notes: '',
          email: '',
          phone: '',
          rating: '',
          status: false,
        });
        setIsFormVisible(false);
      })
      .catch((error) => console.error('Error adding new user:', error));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add New User
      </button>
      {isFormVisible && (
        <div className="w-full sm:max-w-md">
          <form onSubmit={handleFormSubmit} className="p-6 rounded shadow-md">
          <label className="block mb-4">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border p-2 w-full mt-1"
              />
            </label>
            <label className="block mb-4">
              Avatar:
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleInputChange}
                className="border p-2 w-full mt-1"
              />
            </label>
            <label className="block mb-4">
              Hero Project:
              <input
                type="text"
                name="hero_project"
                value={formData.hero_project}
                onChange={handleInputChange}
                className="border p-2 w-full mt-1"
              />
            </label>
            <label className="block mb-4">
              Notes:
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="border p-2 w-full mt-1"
              />
            </label>
            <label className="block mb-4">
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border p-2 w-full mt-1"
              />
            </label>
            <label className="block mb-4">
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border p-2 w-full mt-1"
              />
            </label>
            <label className="block mb-4">
              Rating:
              <input
                type="text"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="border p-2 w-full mt-1"
              />
            </label>
            <label className="block mb-4">
              Status:
              <input
                type="checkbox"
                name="status"
                checked={formData.status}
                onChange={handleInputChange}
                className="mt-1"
              />
              {formData.status ? ' Active' : ' Inactive'}
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddUserButton;