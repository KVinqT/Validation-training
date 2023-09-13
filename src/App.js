import React, { useRef, useState } from "react";
import FormInput from "./components/FormInput";

const App = () => {
  // const usernameRef = useRef();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    // const data = new FormData(e.target);
    // const realData = Object.fromEntries(data.entries());
    // console.log(realData);
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder="Username"
          name="username"
          value={value}
          setValue={setValue}
        />
        <FormInput
          placeholder="Email"
          name="email"
          value={value}
          setValue={setValue}
        />
        <FormInput
          placeholder="Password"
          name="password"
          value={value}
          setValue={setValue}
        />
        <FormInput
          placeholder="Confirm Password"
          name="confirm password"
          value={value}
          setValue={setValue}
        />
        <button>Submiit</button>
      </form>
    </div>
  );
};

export default App;
