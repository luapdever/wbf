import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import login from "./api/auth/login";

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmitButton(e) {
        e.preventDefault();

        login(this.state.email, this.state.password)
            .then(function (response) {
                console.log(response.data);
                window.sessionStorage.setItem(
                    "token",
                    response.data.access_token
                );
            })
            .catch(function (error) {
                console.log(error.error);
            });

        this.setState({
            email: "",
            password: "",
        });
    }

    componentDidMount() {
        axios
            .post("/api/auth/logout", {
                headers: {
                    Authorization:
                        "Bearer" + window.sessionStorage.getItem("token"),
                },
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Test Component</div>

                            <div className="card-body">
                                <form onSubmit={this.onSubmitButton}>
                                    <strong>Email:</strong>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChangeValue}
                                    />

                                    <strong>Password:</strong>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.onChangeValue}
                                    />

                                    <button className="btn btn-success">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Example;

if (document.getElementById("root")) {
    ReactDOM.render(<Example />, document.getElementById("root"));
}

/*import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class App extends React.Component {
  state = {
    items: Array.from({ length: 20 })
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

*/
