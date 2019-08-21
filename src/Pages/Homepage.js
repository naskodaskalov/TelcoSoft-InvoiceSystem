import React, { Component } from 'react'

export default class Homepage extends Component {
  render () {
    return (
      <div className='col-md-8 d-flex m-auto flex-column'>
        <div>
          <h1>Task Description:</h1>
        </div>
        <div className='list-group'>
          <a href='#' className='list-group-item list-group-item-action'>
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>Create an application that allows the user to preview customer related information:</h5>
            </div>
            <ul>
              <li>Customer Info</li>
              <li>Invoices Summary Info</li>
              <li>Invoices Detail Info</li>
            </ul>
          </a>
          <a href='#' className='list-group-item list-group-item-action'>
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>The following use cases must be covered:</h5>
            </div>
            <ul>
              <li>User logs in</li>
              <li>User previews a list of customers</li>
              <li>User previews a list of invoices per customer</li>
              <li>User previews details for an invoice</li>
              <li>User logs out</li>
            </ul>
          </a>
          <a href='#' className='list-group-item list-group-item-action'>
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>You need to utilize the following API endpoints when implementing the task:</h5>
            </div>
            <ul>
              <li>POST https://testtask.free.beeceptor.com/login - attempts to login the customer</li>
              <li>GET https://testtask.free.beeceptor.com/customers - provides information about the Invoice Details</li>
              <li>GET https://testtask.free.beeceptor.com/invoice/customer_id - provides information about the Invoice Details</li>
              <li>GET https://testtask.free.beeceptor.com/invoiceItems/invoice_id - provides information about the Invoice Details</li>
            </ul>
          </a>
        </div>
      </div>
    )
  }
}
