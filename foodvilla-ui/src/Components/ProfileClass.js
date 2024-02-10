import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //create State..
    this.state = {
      userInfo: {},
    };
    //console.log("Child - Constructor" + this.props.name);
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //     console.log("NAMASTE REACT OP ");
    //   }, 1000);
    console.log("Child - componentDidMount");
  }

  componentDidUpdate() {
    if (this.state.count !== prevState.count) {
        //
      }
      if (this.state.count2 !== prevState.count2) {
        // code
      }
      console.log("Component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }

  render() {
    const { name, Qualification, Gender } = this.props.profileDes;
    return (
      <div>
        <h1>This is the profile Page!</h1>
        <h3>Name: {name}</h3>
        <h3>Qualification: {Qualification}</h3>
        <h3>Gender: {Gender}</h3>
      </div>
    );
  }
}

export default ProfileClass;
