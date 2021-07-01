import React from "react";
import {Button} from "react-bootstrap";
import {deleteOneDevice} from "../../http/deviceAPI";

const DeleteItem = ({device, onhide}) => {
    const onDelete = () => {        
        deleteOneDevice(device.id).then(onhide());
    }


    return(
        <div className="delete-item mt-3">            
            <p>{device.name}</p>
            <div className="delete-button"><span>{device.price} UAH</span><Button variant="outline-danger" onClick={onDelete}>Видалити</Button></div>
        </div>
    )
}

export default DeleteItem