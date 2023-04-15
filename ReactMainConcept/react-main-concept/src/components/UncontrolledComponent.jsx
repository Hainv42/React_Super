import React, { Component } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div>
        <form>
          <label>
            {' '}
            Name:
            <input type="text"></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

export default UncontrolledComponent
