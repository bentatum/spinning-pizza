
import React from 'react'
import pure from 'recompose/pure'
import emoji from 'react-easy-emoji'
import { Back, TweenLite } from 'gsap'

@pure
export default class BeatingHeart extends React.Component {

  static propTypes = {
    size: React.PropTypes.number,
    scale: React.PropTypes.number,
    speed: React.PropTypes.number
  };

  static defaultProps = {
    size: 20,
    scale: 0.7,
    speed: 1
  };

  els = []
  scale = 0
  beat = 0

  animate (scale) {
    TweenLite.to(
      this.el,
      this.beat !== 0 ? this.props.speed * 0.2 : this.props.speed,
      {
        scale,
        ease: Back.easeOut,
        onComplete: () => {
          this.beat = this.beat > 2 ? 0 : this.beat + 1
          const next = this.scale === 1 ? this.props.scale : 1
          this.scale = next
          this.animate(next)
        }
      }
    )
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
          fontSize: this.props.size,
          transform: `scale(${this.scale})`,
        }}>
        {emoji('❤️')}
      </div>
    )
  }
}
