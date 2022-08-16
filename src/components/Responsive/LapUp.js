import { PureComponent } from "react"
import PropTypes from "prop-types"
import Responsive from "react-responsive"
import { breakPoints } from "../../utils/mediaQueryHelper"

class LapUp extends PureComponent {
  render() {
    const { children } = this.props
    return <Responsive minWidth={breakPoints.lap}>{children}</Responsive>
  }
}

LapUp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LapUp
