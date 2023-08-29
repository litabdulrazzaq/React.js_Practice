import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  hadleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  formSubmit = (event) => {
    alert(
      `UserName: ${this.state.username} \nComment: ${this.state.comments} \nChoose Topic: ${this.state.topic}`
    );
    event.preventDefault();
  };

  selectTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" value={username} onChange={this.handleUsername} />
        </div>
        <div>
          <label htmlFor="">Commetns:</label>
          <textarea
            onChange={this.hadleComments}
            name=""
            id=""
            cols="25"
            rows="10"
            value={comments}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topic: </label>
          <select name="" id="" value={topic} onChange={this.selectTopic}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
