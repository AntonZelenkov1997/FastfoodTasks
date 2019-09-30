import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import { MenuRestaurants } from './body-panel_restaurants/menu_restaurants'

export const PanelRestaurants = (props) => (
    <Fragment>
        <Header as = "h2" className = {props.className + "-Header"}>Мои заведения</Header>
        <MenuRestaurants className = {"MenuRestaurants"}/>
    </Fragment>
)