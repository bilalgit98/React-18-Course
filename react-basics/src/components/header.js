import React from "react";

class Header extends React.Component {
  state = {
    title: "here is the title!",
    keywords: "",
    count: 0,
  };

  inputChange = (e) => {
    this.setState({
      keywords: e.target.value,
    });
  };

  addOne() {
    this.setState((state, props) => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <>
        <div>
          <div className="logo" onClick={() => console.log("lol")}>
            Logo
          </div>
          <input onChange={this.inputChange} />
        </div>
        <br />
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
        <div> {this.state.count}</div>
        <button onClick={() => this.addOne()}> add one</button>
      </>
    );
  }
}

export default Header;
