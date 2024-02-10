import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/userContext";

const About2 = () => {
  const profileDesc = {
    name: "Gautam Kumar",
    Qualification: "Developer",
    Gender: "MALE",
  };
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
      </p>
      <Profile profileDes={profileDesc} />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Best place to make an Api call
  }
  render() {
    let a = {
      name: "Gautam Kumar",
      Qualification: "Developer",
      Gender: "MALE",
    };
    return (
      <div className="mt-32 mx-4">
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}- {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Profile profileDes={a} />
      </div>
    );
  }
}

export default About;

/**
 *
 *  Parent - constructor
 *  Parent - render
 *  render
 *  Parent - componentDidMount
 *  useEffect
 *
 */
