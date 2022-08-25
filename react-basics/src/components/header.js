import React from "react";

// const inputChange = () => {
//   console.log("input changed!!");
// };
class Header extends React.Component {
  inputChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <>
        <div>
          <div
            className="logo"
            onClick={() => {
              console.log("lol");
            }}
          >
            Logo
          </div>
          <input onChange={this.inputChange} />
        </div>
      </>
    );
  }
}

export default Header;
