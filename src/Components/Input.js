import React, { Component } from 'react'

export default class InputField extends Component {
  render (props) {
    return (
      <div>
        <label className='sr-only' htmlFor={this.props.name}>{this.props.placeholder}</label>
        <div className='input-group mb-2 mr-sm-2'>
          {this.props.fieldSymbol && (
          <div className='input-group-prepend'>
            <div className='input-group-text'>{this.props.fieldSymbol}</div>
          </div>
          )}
          <input
            type={this.props.fieldType}
            className='form-control'
            id={this.props.name}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange} />
        </div>
      </div>
    )
  }
}
