import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import NewsList from "./components/news_list";
//importing db
import JSON from "./db.json";

class App extends Component {
  state = {
    news: JSON,
  };
  render() {
    console.log(this.state);
    return (
      <div className="hey">
        <Header />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
