import React, {Fragment, useState} from 'react'
import { Segment, List, Button, Icon } from 'semantic-ui-react'


const listOfRestaurants = [
    {id: 1, restaurant: "Моё заведение 1", address: "Улица Борисова, 6"},
    {id: 2, restaurant: "Моё заведение 2", address: "Улица Мира, 54"},
    {id: 3, restaurant: "Моё заведение 3", address: "Улица Солженицына, 82а"},
    {id: 4, restaurant: "Моё заведение 4", address: "Улица Ленина, 32/б"},
]

const styleForButtons = {width: "30%", height: "50%"}
const styleForList = {overflow: "auto"}
const styleForSegmentList = {marginRight: "70%", height: "390px"}


export const MenuRestaurants = (props) => {
    const [loadButton, setLoadButton] = useState(false);

    const сhangeStateLoadButton = () => {
        setLoadButton(!loadButton)
    };

    loadButton && setTimeout(сhangeStateLoadButton, 1000)


    const button = <Button icon labelPosition='right' color = 'blue' style = {styleForButtons} onClick = {сhangeStateLoadButton} className = {"BodySegment-Button_loadStatus_false"}>
                        Добавить заведение
                        <Icon name='right arrow' />
                    </Button>;
    
    const loadingButton = <Button loading primary style = {styleForButtons} className = {"BodySegment-Button_loadStatus_true"}>Loading</Button>;

    return (
        <Fragment>
            <Segment style = {styleForSegmentList} className = {props.className + "Segment"}>
                <List animated size = "large" relaxed = "very" style = {styleForList} className = {props.className + "List"}>
                    {listOfRestaurants.map((value) => (<List.Item key = {value.id} href="#" className = {props.className + "List_Item"}>{value.restaurant}</List.Item>))}
                </List>  
            </Segment>
            {loadButton ? loadingButton : button}           
        </Fragment>       
    )
}