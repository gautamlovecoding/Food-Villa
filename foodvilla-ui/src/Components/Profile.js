import { useState, useEffect } from "react";

const Profile = ({ profileDes }) => {
  const { name, Qualification, Gender } = profileDes;
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Api call...
    console.log("useEffect");
  },[])

  console.log("render");
  return (
    <div>
      <h1>This is the profile Page!</h1>
      <h3>Name: {name}</h3>
      <h3>Qualification: {Qualification}</h3>
      <h3>Gender: {Gender}</h3>
      <h3>count: {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
