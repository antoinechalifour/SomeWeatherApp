import { stringify } from 'qs'
import { Component } from 'react'
import { APP_ID } from '../constants'

class Fetch extends Component {
  constructor (props) {
    super(props)

    this.state = { data: null }
  }

  componentDidMount () {
    let url = this.props.url

    if (this.props.qs) {
      const qs = {
        ...this.props.qs,
        APPID: APP_ID
      }

      url += `?${stringify(qs)}`
    }

    window.fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

  render () {
    return this.state.data
      ? this.props.children(null, this.state.data)
      : null
  }
}

export default Fetch
