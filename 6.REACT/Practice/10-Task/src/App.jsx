import React from "react";
import { AuthProvider } from "./Aurthentication/AuthContext";
import Login from "./Aurthentication/Login";
import { Theme } from "./Context/Them";

const App = () => {
  return (
    <div>
      <Theme />
      <AuthProvider>
        <h1>Authentication Example</h1>
        <Login />
      </AuthProvider>
    </div>
  );
};

export default App;
