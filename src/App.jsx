import "./App.css";
import FormInput from "./components/FormInput";
import { useState } from "react";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 5,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="username" setUserName={setUserName} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Sth else" />
      </form>
    </div>
  );
};

export default App;
