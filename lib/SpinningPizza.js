
import React from 'react'
import pure from 'recompose/pure'
import emoji from 'react-easy-emoji'
import { Back, TweenLite } from 'gsap'

@pure
export default class SpinningPizza extends React.Component {

  static defaultProps = {
    size: 20,
    speed: 1.25
  };

  constructor (props) {
    super(props)
    this.tick = 0
    this.rotate = this.rotate.bind(this)
  }

  rotate () {
    TweenLite.to(this.el, this.props.speed, {
      ease: Back.easeInOut,
      rotation: this.tick ? 360 : -360,
      onComplete: () => {
        this.tick = !this.tick
        this.rotate()
      }
    })
  }

  componentDidMount () {
    TweenLite.to(this.el, 0.6, {
      scale: 1,
      ease: Back.easeOut,
      onComplete: this.rotate
    })
  }

  render () {
    return (
      <div
        ref={ref => this.el = ref}
        style={{
          transform: 'scale(0)',
          fontSize: this.props.size
        }}>
        {emoji('🍕')}
      </div>
    )
  }
}
