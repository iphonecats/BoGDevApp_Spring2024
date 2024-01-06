import React from 'react';
import userService from '../services/users'
import { useState, useEffect } from 'react';

import {
  useParams,
  useNavigate,
} from "react-router-dom"

const UserNotes = () => {
  const[user, setUser] = useState(null);
  //id corresponding to the route /notes/{id}
  const id = useParams().id
  const navigate = useNavigate();

  useEffect(() => {
    userService
      .getUser(id)
      .then(res => res.data)
      .then(user => setUser(user))
  }, [])

  const handleNavigateBack = () => {
    navigate(-1);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button
        onClick={handleNavigateBack}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <img src={user.avatar} alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Hero Project: {user.hero_project}</p>
      <p>Rating: {user.rating}</p>
      <p>Status: {user.status ? 'Active' : 'Inactive'}</p>
      <h2 className="text-2xl font-bold mt-4 mb-2">Notes</h2>
      <p>{user.notes}</p>

    </div>
  );
};

export default UserNotes;