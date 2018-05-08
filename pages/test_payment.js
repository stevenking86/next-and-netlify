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
    //sandbox keys, okay to be public for now :-)
    const authData = {
      clientKey: "2stxUEPKXWc92j33PtRd75FXzKAS5E7vKbRzpd9Wmcv7jfKQqk7D37v33mG9cb24",
      apiLoginID: "9Hv89Ghw"
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
      this.submitSuccessfulResponse(response.opaqueData);
    }
  }

  submitSuccessfulResponse = opaqueData => {
    const dataDescriptor = opaqueData.dataDescriptor;
    const dataValue = opaqueData.dataValue;
    console.log("SUCCESS:", dataDescriptor, dataValue)

    fetch("https://apitest.authorize.net/xml/v1/request.api", {
      body: JSON.stringify({
        createTransactionRequest: {
          merchantAuthentication: {
            name: "9Hv89Ghw",
            transactionKey: "55u442u9H87Q9zLa"
          },
          refId: "123456",
          transactionRequest: {
            transactionType: "authCaptureTransaction",
            amount: "2000",
            payment: {
              opaqueData: {
                dataDescriptor: dataDescriptor,
                dataValue: dataValue
              }
            }
          }
        }
      }),
      method: 'POST'
    }).then(response => console.log(response.json()))
  }

  handleValueChange = e => {
    let update = {}
    const value = e.target.value
    const field = e.target.id

    update[field] = value

    if (value !== "") {
      this.setState(update);
    }
  }
}
