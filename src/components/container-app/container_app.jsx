import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import { Navbar } from '../navbar/navbar'
import { Body } from '../body/body'

const styleForContainer = {backgroundColor: "#747782"}

export const ContainerApp = (props) => (
    <Container className = {props.className}>
        <Segment  style = {styleForContainer} className = {props.className + "Segment"}>
            <Grid columns = "equal" relaxed className = {props.className + "Grid"}>
                <Navbar className = "Navbar"/>
                <Body className = "Body"/>
            </Grid>
        </Segment>    
    </Container>
)


