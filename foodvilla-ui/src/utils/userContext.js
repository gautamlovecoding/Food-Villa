import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
    designation: "Dummy Designation",
  }
});

UserContext.displayName = "UserContext"

export default UserContext;

