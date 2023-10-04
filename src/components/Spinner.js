import React, { Component } from 'react'
import TransparentSpinner from './TransparentSpinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={TransparentSpinner} width={"100px"} height={"100px"} alt="loading" />
      </div>
    )
  }
}
