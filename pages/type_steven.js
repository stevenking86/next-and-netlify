import React from 'react'

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      stevenField: '',
      attempted: false,
      correctAttempt: false
    };
  }

  render() {
    return (
      <div>
        <h1> Type 'Steven' (exactly like that.)</h1>
        <div>
          <input
            placeholder="Steven"
            type="text"
            id="stevenField"
            onChange={this.handleStevenChange}
          />

          <button onClick={this.submitStevenAttempt}>Submit</button>
        </div>
        <div>
          {
            this.state.attempted && this.state.correctAttempt &&
            <h1>Nice. You successfully typed 'Steven'</h1>
          }

          {
            this.state.attempted && !this.state.correctAttempt &&
            <h1>You are so wrong.  You should be embarassed.</h1>
          }
        </div>
      </div>
    )
  }

  handleStevenChange = e => {
    const steven = e.target.value

    if (steven !== "") {
      this.setState({
        stevenField: steven
      });
    }
  }

  submitStevenAttempt = () => {
    console.log(this.state.stevenField);
    //locally: http://localhost:9000/test_function
    //live: (not currently working) /.netlify/functions/test_function
    fetch('http://localhost:9000/test_function', {
      method: "POST",
      body: JSON.stringify({
        steven_attempt: this.state.stevenField
      })
    })
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res)
      if (!res.valid) {
        this.setState({
          attempted: true,
          correctAttempt: false
        })
      } else {
        this.setState({
          attempted: true,
          correctAttempt: true
        })
      }
    })
  }
}
