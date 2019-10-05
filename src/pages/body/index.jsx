import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PanelRestaurants from './PanelRestaurants/index';

const Body = (props) => (
  <Grid.Row className={`${props.className}Row`}>
    <Grid.Column className={`${props.className}Column`}>
      <Segment className={`${props.className}Segment`}>
        <PanelRestaurants className="PanelRestaurants" />
      </Segment>
    </Grid.Column>
  </Grid.Row>

);

Body.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Body;
