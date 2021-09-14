import React, { useEffect, useState } from "react";
import classes from "./WidgetSm.module.scss";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2EwNGZjOWQ5Y2Y3MDMwYWNmYjQyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYyNDA5MCwiZXhwIjoxNjMxNjQyMDkwfQ.q9fOQ7W0vrt-OikOHfRrOn2OqyMAtr7vqlnA9JyNGk8",
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className={classes.widget}>
      <span className={classes.smTitle}>New Join Members</span>
      <ul className={classes.smList}>
        {newUsers.map((user) => (
          <li key={user._id} className={classes.listItem}>
            <img src={user.profilePic} alt="" className={classes.smImg} />
            <div className={classes.smUser}>
              <span className={classes.smUsername}>{user.username}</span>
            </div>
            <button className={classes.smButton}>
              <Visibility className={classes.smIcon} />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
