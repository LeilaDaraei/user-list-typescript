import React, { useState } from "react";
import User, { userInt } from "./Components/User";
import "./App.css";

const App: React.FC = () => {
  interface allUserInt {
    currentUser: userInt;
    allUsers: Array<userInt>;
  }
  const [users, setUsers] = useState<allUserInt>({
    currentUser: { name: "", age: "", job: "", deleteUser: () => {} },
    allUsers: [],
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsers({
      ...users,
      currentUser: {
        ...users.currentUser,
        [e.target.name]: e.target.value,
      },
    });
  };
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setUsers({
      currentUser: {
        name: "",
        age: "",
        job: "",
        deleteUser: () => {},
      },
      allUsers: [...users.allUsers, users.currentUser],
    });
  };

  const deleteHandler = (index: number): void => {
    users.allUsers.filter((user, i) => {
      return index !== i;
    });
    users.allUsers.splice(index, 1);

    setUsers({ ...users, allUsers: users.allUsers });
  };

  const allUsers = users.allUsers.map((user, i) => (
    <User
      key={i}
      name={user.name}
      age={user.age}
      job={user.job}
      deleteUser={() => deleteHandler(i)}
    />
  ));

  return (
    <div className="container">
      <h1>User Cards</h1>
      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
          required
          type="text"
          name="name"
          value={users.currentUser.name}
          onChange={onChangeHandler}
          autoFocus
        />
        <label htmlFor="userAge">Age:</label>
        <input
          id="userAge"
          required
          type="number"
          name="age"
          value={users.currentUser.age}
          onChange={onChangeHandler}
        />

        <label htmlFor="userJob">Job:</label>
        <input
          id="userJob"
          required
          type="text"
          name="job"
          value={users.currentUser.job}
          onChange={onChangeHandler}
        />
        <button type="submit">Add user</button>
      </form>
      {allUsers}
    </div>
  );
};

export default App;
