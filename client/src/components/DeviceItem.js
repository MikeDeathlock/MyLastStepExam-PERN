import React from "react";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory();    
    

    return(
        <div className="product-item mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <img src={process.env.REACT_APP_API_URL + device.img} />            
            <h3>{device.name}</h3>
            <div className="item-price"><span>{device.price} UAH</span></div>
        </div>
    )
}

export default DeviceItem