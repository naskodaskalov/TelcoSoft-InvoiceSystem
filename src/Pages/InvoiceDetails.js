import React, { Component } from 'react'

import Data from '../Configs/Data'

export default class InvoiceDetails extends Component {
  constructor (props) {
    super(props)

    let invoiceId = this.props.match.params.id

    this.state = {
      invoice: [],
      invoiceId: invoiceId
    }
  }

  componentDidMount () {
    Data
      .getInvoicesData(this.state.invoiceId, 'invoiceItems')
      .then((res) => {
        console.log(res)
        this.setState({ invoice: res })
      })
  }
  render () {
    return (
      <div>
        <h2 className='d-flex justify-content-center'>Invoice details </h2>
      </div>
    )
  }
}
