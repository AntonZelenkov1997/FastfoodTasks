import React from 'react';
import { Grid, Segment, Container } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import Navbar from '../Navbar';
import Body from '../body';

const styleForContainer = { backgroundColor: '#747782' };

const ContainerApp = (props) => (
  <Container className={props.className}>
    <Segment style={styleForContainer} className={`${props.className}Segment`}>
      <Grid columns="equal" relaxed className={`${props.className}Grid`}>
        <Navbar className="Navbar" />
        <Body className="Body" />
      </Grid>
    </Segment>
  </Container>
);

ContainerApp.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ContainerApp;
