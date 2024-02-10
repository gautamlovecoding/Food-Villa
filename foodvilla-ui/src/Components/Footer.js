import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <p className="fixed bottom-0 w-full bg-slate-700 text-white p-4 text-center">
      This site is Developed By {user.name} - {user.email} having Designation -
      {user?.designation}
    </p>
  );
};

export default Footer;
