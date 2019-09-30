import React from 'react'
import { PanelRestaurants } from './body-panel_restaurants'
import { Grid, Segment } from 'semantic-ui-react'

export const Body = (props) => (
    <Grid.Row className = {props.className + "Row"}>
        <Grid.Column className = {props.className + "Column"}>
            <Segment className = {props.className + "Segment"}>
                <PanelRestaurants className = "PanelRestaurants"/>
            </Segment>
        </Grid.Column>
    </Grid.Row>
    
)