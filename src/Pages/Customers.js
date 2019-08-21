import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Data from '../Configs/Data'

export default class Customers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      customers: [],
      loading: true,
      page: '',
      start: 0,
      end: 10,
      disablePrevBtn: true,
      disableNextBtn: false
    }

    this.saveChosenUserInfo = this.saveChosenUserInfo.bind(this)
    this.showPrevPage = this.showPrevPage.bind(this)
    this.showNextPage = this.showNextPage.bind(this)
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

  saveChosenUserInfo (event) {
    let userFullname = event.target.dataset['firstname'] + ' ' + event.target.dataset['lastname']
    window.localStorage.setItem('selected-user', userFullname)
  }

  showNextPage (event) {
    event.preventDefault()
    let start = this.state.start
    let end = this.state.end

    this.setState({ disablePrevBtn: false })
    this.setState({
      start: start + 10, end: end + 10
    })

    if (this.state.end + 10 == this.state.customers.length) {
      this.setState({ disableNextBtn: true })
    }
  }

  showPrevPage (event) {
    event.preventDefault()
    let start = this.state.start
    let end = this.state.end

    this.setState({
      start: start - 10, end: end - 10
    })
    if (this.state.start - 10 == 0) {
      this.setState({ disablePrevBtn: true })
    }
  }
  render () {
    let customersArr = this.state.customers

    let arrSlice = customersArr.slice(this.state.start, this.state.end)
    let customers = arrSlice.map((customer, index) => (
      <div className='card col-md-3 m-1' key={index}>
        <div className='row'>
          <div className='col-md-4 m-auto'>
            <h3>{customer['id']}</h3>
          </div>
          <div className='card-body col-md-8'>
            <h5 className='card-title'>{customer['first_name']} {customer['last_name']}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{customer['email']}</h6>
            {customer['hasInvoices'] ? (
              <Link
                to={`/invoice/${customer['id']}`}
                onClick={this.saveChosenUserInfo}
                data-firstname={customer['first_name']}
                data-lastname={customer['last_name']}
                className='card-link btn btn-primary'>Show invoices</Link>
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
            <div className='d-flex justify-content-center mb-2'>
              <button onClick={this.showPrevPage} className='card-link btn btn-primary' disabled={this.state.disablePrevBtn}>Prev page</button>
              <button onClick={this.showNextPage} className='card-link btn btn-primary' disabled={this.state.disableNextBtn}>Next page</button>
            </div>
            <div className='customers-list row'>
              {customers}
            </div>
          </div>
        )}
      </div>
    )
  }
}
