import React from "react";

const User = ({
  name = "No especificado",
  email = "No especificado",
  image = "https://png2.kisspng.com/20180508/ozq/kisspng-user-computer-icons-system-chinese-wind-title-column-5af1427fd3ab48.378455571525760639867.png"
}) => (
  <div className="user-card">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <p>{email}</p>
  </div>
);

export default User;
