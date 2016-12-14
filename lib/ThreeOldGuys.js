
import React from 'react'
import range from 'lodash.range'
import pure from 'recompose/pure'
import emoji from 'react-easy-emoji'
import { Back, TweenMax } from 'gsap'

const shades = ['🏻', '🏼', '🏽', '🏾', '🏿']

@pure
class ThreeOldGuys extends React.Component {

  static propTypes = {
    size: React.PropTypes.number,
    y: React.PropTypes.number,
    character: React.PropTypes.string
  };

  static defaultProps = {
    size: 20,
    y: -5,
    character: '👴',
    shade: -1
  };

  constructor (props) {
    super(props)
    this.y = props.y
    this.els = []
  }

  animate () {
    TweenMax.staggerTo(
      this.els,
      0.2,
      { y: this.y },
      0.1,
      () => {
        this.y = this.y === this.props.y ? 0 : this.props.y
        this.animate()
      }
    )
  }

  componentDidMount () {
    this.animate()
  }

  render () {
    const { character, shade } = this.props
    return (
      <div style={{
        display: 'flex',
        fontSize: this.props.size
      }}>
        {range(3).map(i =>
          <div key={i} ref={ref => this.els.push(ref)}>
            {emoji(shade < 0 || shade > 4 ? character : `${character}${shades[shade]}`)}
          </div>
        )}
      </div>
    )
  }
}



export default ThreeOldGuys
