import React, {Component} from 'react'

export class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ""/*e.target.value*/
    }
  }

  // onHandleSearch = e => {
  //   setState() =
  // }


  render() {
    return (
      <div>
        <div>
          <input type='text' /*onChange={this.onHandleSearch}*/ />
          <button>Search</button>
        </div>
      </div>
    )
  }








}
