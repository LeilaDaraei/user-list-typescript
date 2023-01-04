import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  interface userInt {
    name: string;
    age: string;
    job: string;
  }
  const [users, setUsers] = useState<{ currentUser: userInt }>({
    currentUser: { name: "", age: "", job: "" },
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsers({
      currentUser: {
        ...users.currentUser,
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <div className="container">
      <h1>React with typescript</h1>
      <form>
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
          type="text"
          name="name"
          value={users.currentUser.name}
          onChange={onChangeHandler}
        />
        <label htmlFor="userAge">Age:</label>
        <input
          id="userAge"
          type="number"
          name="age"
          value={users.currentUser.age}
          onChange={onChangeHandler}
        />

        <label htmlFor="userJob">Job:</label>
        <input
          id="userJob"
          type="text"
          name="job"
          value={users.currentUser.job}
          onChange={onChangeHandler}
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default App;
