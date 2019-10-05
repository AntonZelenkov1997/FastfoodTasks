import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MenuRestaurants from './MenuRestaurants/index';

const PanelRestaurants = (props) => (
  <>
    <Header as="h2" className={`${props.className}-Header`}>Мои заведения</Header>
    <MenuRestaurants className="MenuRestaurants" />
  </>
);

PanelRestaurants.propTypes = {
  className: PropTypes.string.isRequired,
};

export default PanelRestaurants;
