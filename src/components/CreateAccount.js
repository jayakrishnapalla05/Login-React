import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function CreateAccount() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullname: "",
    mobileNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCreateAccount = () => {
    
    localStorage.setItem("userData", JSON.stringify(formData));

    if(formData.fullname === "" || formData.mobileNumber === "" || formData.email === "" || formData.password === "" || formData.companyName === "")
    {
        alert("All Fields are required");
    }
    else
    {   
       history.push("/profile");
    }
  };

  return (
    <div className="create">
      <h1>Create your <br/>
      PopX account</h1>
      <form>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleInputChange}
          required
        /><br/>
        <label>
          Are you an agency?
          </label>
          <div className="button">
          <input
            type="radio"
            name="isAgency" required
          />Yes
          <input
            type="radio"
            name="isAgency" required
          />No
          </div>
        <button type="button" onClick={handleCreateAccount} className="create-button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
