import React from 'react'
import { Header} from 'semantic-ui-react'

export const MainPageRef = (props) => (
    <Header as='h2' className = {props.className + "Header"}>
        <a href = "#" className = {props.className + "Header-Href"}>Заголовок</a>
    </Header>
)