import React from 'react'

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cardCode: ''
    };
  }

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://jstest.authorize.net/v1/Accept.js"
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <h1>Test Payment Form</h1>
        <div className="testForm">
          <input type="text" name="cardNumber" id="cardNumber" onChange={this.handleValueChange} placeholder="cardNumber"/>
          <input type="text" name="expMonth" id="expMonth" onChange={this.handleValueChange} placeholder="expMonth"/>
          <input type="text" name="expYear" id="expYear" onChange={this.handleValueChange} placeholder="expYear"/>
          <input type="text" name="cardCode" id="cardCode" onChange={this.handleValueChange} placeholder="cardCode"/>
          <input type="hidden" name="dataValue" id="dataValue" />
          <input type="hidden" name="dataDescriptor" id="dataDescriptor" />
          <button type="submit" onClick={this.sendPaymentDataToAnet.bind(this)}>Pay</button>
        </div>
      </div>
    )
  }

  sendPaymentDataToAnet = e => {
    console.log(process);
    const authData = {
      clientKey: process.env.AUTHORIZE_PUBLIC_CLIENT_KEY,
      apiLoginID: process.env.AUTHORIZE_API_LOGIN_ID
    };

    const {cardNumber, cardCode, expMonth, expYear} = this.state;

    const cardData = {
      cardNumber: cardNumber,
      month: expMonth,
      year: expYear,
      cardCode: cardCode
    };

    var secureData = {
      authData: authData,
      cardData: cardData
    };

    console.log("About to dispatch data to authorize:", secureData);

    Accept.dispatchData(secureData, this.responseHandler);
  }

  responseHandler = response => {
    console.log("responseHandler response:", response);

    if (response.messages.resultCode === "Error") {
      var i = 0;
      while (i < response.messages.message.length) {
        console.log(
            response.messages.message[i].code + ": " +
            response.messages.message[i].text
        );
        i = i + 1;
      }
    } else {
      this.paymentFormUpdate(response.opaqueData);
    }
  }

  paymentFormUpdate = opaqueData => {
    const dataDescriptor = opaqueData.dataDescriptor;
    const dataValue = opaqueData.dataValue;
    console.log("SUCCESS:", dataDescriptor, dataValue)
    // document.getElementById("dataDescriptor").value = opaqueData.dataDescriptor;
    // document.getElementById("dataValue").value = opaqueData.dataValue;
  }

  handleValueChange = e => {
    debugger;
    let update = {}
    const value = e.target.value
    const field = e.target.id

    update[field] = value
    debugger;
    if (value !== "") {
      this.setState(update);
    }
  }
}
