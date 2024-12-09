import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { updateUsername } from '../../redux/actions/user.actions.js'; 
import "./Username.scss"; 


function ChangeUsername() {
  
  const token = useSelector((state) => state.auth.token);

  const userData = useSelector((state) => state.user.userData);


  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState(userData.username || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch(); 

  
  const handleSubmitUsername = async (event) => {
    event.preventDefault(); 

    try {
      
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ userName }), 
      });

      if (!response.ok) {
        
        setErrorMessage("Error updating username");
        return;
      }

      
      const data = await response.json();
      const newUsername = data.body.userName;

      
      dispatch(updateUsername(newUsername));
      setShowForm(false); 
      setSuccessMessage("Username updated successfully!"); 
    } catch (error) {
      
      console.error("Network or server error:", error);
      setErrorMessage("An unexpected error occurred");
    }
  };

  return (
    <div className="header">

      {showForm ? (
        <div>
          <h2>Edit user info</h2>
          <form onSubmit={handleSubmitUsername}>
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)} 
              />
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input type="text" id="firstname" value={userData.firstname} disabled />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" id="lastname" value={userData.lastname} disabled />
            </div>
            <div className="buttons">
              <button type="submit" className="edit-username-button">
                Save
              </button>
              <button type="button" className="edit-username-button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      ) : (
        <div>

          <h2>
            Welcome back <br />
            {userData.firstname} {userData.lastname}!
          </h2>
          <button className="edit-button" onClick={() => setShowForm(true)}>
            Edit Name
          </button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default ChangeUsername; 
