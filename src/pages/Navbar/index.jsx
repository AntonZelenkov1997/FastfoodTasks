import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MainPageRef from './MainPageRef/index';
import SignInStatus from './SignInStatus/index';

const style = { height: '100%' };

const Navbar = (props) => (
  <Grid.Row className={`${props.className}Row`}>
    <Grid.Column className={`${props.className}FirstColumn`}>
      <Segment style={style} className="FirstColumnSegmentGrid">
        <MainPageRef className="FirstColumnSegmentGrid" />
      </Segment>
    </Grid.Column>
    <Grid.Column textAlign="right" className={`${props.className}SecondColumn`}>
      <Segment style={style} className="SecondColumnSegmentGrid">
        <SignInStatus className="SecondColumnSegmentGrid" />
      </Segment>
    </Grid.Column>
  </Grid.Row>
);

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Navbar;
