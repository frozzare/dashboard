import { Component } from 'react';
import PropTypes from 'prop-types';
import tinytime from 'tinytime';
import Widget from '../../components/widget';
import styled from 'styled-components';

const Heading = styled.span`
	font-size: 2em;
	text-align: center;
	margin-bottom: 0.5em;
`;

const Text = styled.span`
	font-size: 1em;
	text-align: center;
	color: #477dbe;
`;
class DateTime extends Component {
  /**
   * Default state.
   *
   * @var {object}
   */
  state = {
    date: new Date()
  };

  /**
   * Start interval timer on mount.
   */
  componentDidMount () {
    const { interval } = this.props;
    this.interval = setInterval(() => this.setState({ date: new Date() }), interval);
  }

  /**
   * Clear interval on unmount.
   */
  componentWillUnmount () {
    clearInterval(this.interval);
  }

  /**
   * Render component.
   */
  render() {
    const { date } = this.state;

    return (
      <Widget>
        <Heading>{tinytime(this.props.timeFormat).render(date)}</Heading>
        <Text>{tinytime(this.props.dateFormat).render(date)}</Text>
      </Widget>
    );
  }
}

DateTime.propTypes = {
    dateFormat: PropTypes.string,
    interval: PropTypes.number,
    timeFormat: PropTypes.string
};

DateTime.defaultProps = {
    interval: 1000,
    dateFormat: '{DD} {MM} {YYYY}',
    timeFormat: '{H}:{mm}:{ss}'
};

export default DateTime;
