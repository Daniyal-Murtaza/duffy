import React from "react";
import { users } from "./users";

function User(props) {
  const { username, firstName, lastName, school, email, profilePicture, classLevel } =
    props.user;

  return (
    <>
      <img src={profilePicture} alt={username} />
      <h2>{firstName} {lastName}</h2>
      <ul>
        <li> <strong> Username: </strong> {username}</li>
        <li> <strong> Email: </strong> {email}</li>
        <li> <strong> School: </strong> {school}</li>
        <li> <strong> Class Level: </strong> <span style={{ color: classLevel === "Freshmen" ? "green" : "black" }}>{classLevel}</span></li>
      </ul>
      <hr />
    </>
  );
}

function UserList() {
  return (
    <div>
      {users.map((user) => (
        <User key={user.username} user={user} />
      ))}
    </div>
  );
}

export default UserList;
