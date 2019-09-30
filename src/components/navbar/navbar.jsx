import React from 'react'
import { MainPageRef } from './navbar-main_page_ref'
import { SignInStatus } from './navbar-sign_in_status'
import { Grid, Segment } from 'semantic-ui-react'

const style = {height: "100%"}

export const Navbar = (props) => (
    <Grid.Row className = {props.className + "Row"}>
        <Grid.Column className = {props.className + "FirstColumn"}>
            <Segment style = {style} className = "FirstColumnSegmentGrid">
                <MainPageRef className = "FirstColumnSegmentGrid"/>
            </Segment>
        </Grid.Column>
        <Grid.Column textAlign = "right" className = {props.className + "SecondColumn"}>
            <Segment style = {style} className = "SecondColumnSegmentGrid">
                <SignInStatus className = "SecondColumnSegmentGrid"/>
            </Segment>
        </Grid.Column>
    </Grid.Row>
)