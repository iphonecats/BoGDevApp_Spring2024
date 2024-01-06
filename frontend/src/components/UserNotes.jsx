import React from 'react';

const UserNotes = ({ user }) => {
  return (
    <div>
      <h2>User Notes</h2>
      <img src={user.avatar} alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Hero Project: {user.hero_project}</p>
      <p>Rating: {user.rating}</p>
      <p>Status: {user.status ? 'Active' : 'Inactive'}</p>
      <h2>User Notes</h2>
      <p>Notes: {user.notes}</p>
    </div>
  );
};

export default UserNotes;