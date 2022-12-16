import React from "react";

const Profile = (props) => {
  const { name, email } = props.user;

  return (
    <div className="person">
        <h3>{name}</h3>
        <span data-testid='span-id'>{email}</span>
    </div>
  );
}

export default Profile;