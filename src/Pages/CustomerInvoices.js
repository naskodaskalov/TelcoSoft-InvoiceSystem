import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Data from '../Configs/Data'

export default class CustomerInvoices extends Component {
  constructor (props) {
    super(props)

    let customerId = this.props.match.params.id

    this.state = {
      customerId: customerId,
      invoices: [],
      loading: true
    }
  }

  componentDidMount () {
    Data
      .getInvoicesData(this.state.customerId, 'invoice')
      .then(res => {
        this.setState({ invoices: res })
      })
        .then(() => {
          this.setState({ loading: false })
        })
  }
  render () {
    let loader = ''
    let invoices = this.state.invoices.map((invoice, index) => (
      <tr key={index}>
        <th scope='row'>{invoice['id']}</th>
        <td>{invoice['VATNumber']}</td>
        <td>{invoice['total sum']} {invoice['currency']}</td>
        <td><Link to={`/invoiceItems/${invoice['id']}`} className='card-link'>View details</Link></td>
      </tr>
    ))
    return (
      <div>
        {this.state.loading ? (
          loader
        ) : (
          <div>
            <h2 className='d-flex justify-content-center'>Invoices for: {window.localStorage.getItem("selected-user")}</h2>
            <table className='table table-hover col-md-8 m-auto'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>VAT number</th>
                  <th scope='col'>Total price</th>
                  <th scope='col' />
                </tr>
              </thead>
              <tbody>
                {invoices}
              </tbody>
            </table>

          </div>
        )}
      </div>
    )
  }
}
