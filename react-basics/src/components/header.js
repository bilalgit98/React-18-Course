import React from "react";

class Header extends React.Component {
  state = {
    keywords: "",
  };

  inputChange = (e) => {
    this.setState({
      keywords: e.target.value,
    });
  };

  render() {
    return (
      <>
        <header>
          <div className="logo"> Logo </div>
          <input onChange={(e) => this.inputChange(e)} />
        </header>
      </>
    );
  }
}

export default Header;
