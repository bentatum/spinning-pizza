
import React from 'react'
import emoji from 'react-easy-emoji'
import { TweenMax } from 'gsap'
import PropTypes from 'prop-types'

export default class SpinningPizza extends React.PureComponent {

  static defaultProps = {
    size: 16,
    speed: 1
  };

  constructor (props) {
    super(props)
    this.animate = this.animate.bind(this)
  }

  animate () {
    TweenMax.to(this.el, this.props.speed, {
      repeat: -1,
      rotation: 360
    })
  }

  componentDidMount () {
    this.animate()
  }

  render () {
    return (
      <div
        ref={ref => this.el = ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: this.props.size
        }}>
        {emoji('🍕')}
      </div>
    )
  }
}
