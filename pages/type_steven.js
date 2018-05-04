import React from 'react'

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      stevenField: ''
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

    // const headers = {
    //   "Access-Control-Allow-Origin" : "*",
    // };

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
        console.log('WRONG')
      } else {
        console.log('Nice')
      }
    })
  }
}
