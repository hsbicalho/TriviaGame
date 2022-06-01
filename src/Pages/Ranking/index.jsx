// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeButton from '../../Components/HomeButton';

class Ranking extends Component {
  render() {
    return (
      <>
        <HomeButton />
        <h1 data-testid="ranking-title">Ranking</h1>
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
