import React, { Component } from 'react'

import Data from '../Configs/Data'

export default class InvoiceDetails extends Component {
  constructor (props) {
    super(props)

    let invoiceId = this.props.match.params.id

    this.state = {
      invoiceData: [],
      invoiceId: invoiceId,
      loading: true
    }
  }

  componentDidMount () {
    Data
      .getInvoicesData(this.state.invoiceId, 'invoiceItems')
      .then((res) => {
        this.setState({ invoiceData: res })
      })
      .then(() => {
        this.setState({ loading: false })
      })
  }
  render () {
    let loader = ''
    let invoice = this.state.invoiceData.map((item, index) => (
      <tr key={index}>
        <th scope='row'>{item['id']}</th>
        <td>{item['itemName']}</td>
        <td>{item['VAT']}</td>
        <td>{item['quantity']}</td>
        <td>{item['sum']} {item['currency']}</td>
      </tr>
    ))
    return (
      <div>
        {this.state.loading ? (
          loader
        ) : (
          <div>
            <h2 className='d-flex justify-content-center'>Invoice details</h2>
            <table className='table table-hover col-md-8 m-auto'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Item name</th>
                  <th scope='col'>VAT</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Price</th>
                </tr>
              </thead>
              <tbody>
                {invoice}
              </tbody>
            </table>

          </div>
        )}
      </div>
    )
  }
}
