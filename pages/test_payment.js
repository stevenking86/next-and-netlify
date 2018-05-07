import React from 'react'

export default class extends React.Component {
  constructor() {
    super();
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

        <form id="paymentForm"
            method="POST"
            action="#"
            onSubmit="sendPaymentDataToAnet()">
            <input type="text" name="cardNumber" id="cardNumber" placeholder="cardNumber"/>
            <input type="text" name="expMonth" id="expMonth" placeholder="expMonth"/>
            <input type="text" name="expYear" id="expYear" placeholder="expYear"/>
            <input type="text" name="cardCode" id="cardCode" placeholder="cardCode"/>
            <input type="hidden" name="dataValue" id="dataValue" />
            <input type="hidden" name="dataDescriptor" id="dataDescriptor" />
            <button type="submit">Pay</button>
        </form>
      </div>
    )
  }

  sendPaymentDataToAnet = e => {
    debugger;
  }
}
