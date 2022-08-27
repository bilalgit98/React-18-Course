import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
  };

  addPlayerHandler = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name],
    }));
  };

  removePlayerHandler = (idx) => {
    let newArray = this.state.players;
    newArray.splice(idx, 1);
    this.setState({ players: newArray });
  };

  nextHandler = () => {
    const { players } = this.state;
    if (players.length < 2) {
      // show the toast
      toast.error("You need more than 1 player", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    } else {
      //move on to the next stage
      this.setState(
        {
          stage: 2,
        },
        () => {
          setTimeout(() => {
            console.log("looser");
          }, 2000);
        }
      );
    }
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
            removePlayer: this.removePlayerHandler,
            next: this.nextHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
        <ToastContainer />
      </>
    );
  }
}

export { MyContext, MyProvider };
