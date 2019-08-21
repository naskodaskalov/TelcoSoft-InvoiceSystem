import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Data from '../Configs/Data'

export default class Customers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      customers: [],
      loading: true
    }
  }

  componentDidMount () {
    Data
      .get('customers')
      .then((res) => {
        this.setState({ customers: res })
      })
      .then(() => {
        this.setState({ loading: false })
      })
  }
  render () {
    let customersArr = this.state.customers
    let customers = customersArr.map((customer, index) => (
      <div className='card col-md-3 m-1' key={index}>
        <div className='row'>
          <div className='col-md-4 m-auto'>
            <h3>{customer['id']}</h3>
          </div>
          <div className='card-body col-md-8'>
            <h5 className='card-title'>{customer['first_name']} {customer['last_name']}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{customer['email']}</h6>
            {customer['hasInvoices'] ? (
              <Link to={`/invoice/${customer['id']}`} wargod='asdsa' className='card-link'>Show invoices</Link>
          ) : (
            <div>&nbsp;</div>
          )}
          </div>
        </div>
      </div>
    ))

    let loader = this.state.loading ? (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    ) : ''

    return (
      <div>
        {this.state.loading ? (
          loader
        ) : (
          <div>
            <h2 className='d-flex justify-content-center'>List of customers</h2>
            <div className='customers-list row'>
              {customers}
            </div>
          </div>
        )}
      </div>
    )
  }
}
