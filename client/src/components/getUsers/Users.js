import React, { useState, useEffect } from "react";
import "./users.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getall");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching users data");
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/delete/${userId}`
      );
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== userId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  };

  return (
    <div className="userTable">
      <Link to={"/add"} className="addUserBtn">
        Add Users
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead className="tHead">
            <tr>
              <th>S.No.</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="tBody">
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="actionsBtn"
                    onClick={() => deleteUser(user._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/update/${user._id}`} className="editBtn">
                    <i className="fa-solid fa-file-pen"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
