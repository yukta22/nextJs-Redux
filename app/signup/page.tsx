import React from "react";

const Signup = () => {
  return (
    <>
      <form>
        <label>User Name:</label>
        <input type="text" name="username" />
        <label>User Email:</label>
        <input type="text" name="useremail" />
        <label>User Password:</label>
        <input type="text" name="userpassword" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;
