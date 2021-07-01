import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";



const DeviceList = observer(() => {
    const {device} = useContext(Context);   

    return(
        <div className="bg-main-container">                
                <div className="products-container">
                    {device.devices.map(device =>
                        <DeviceItem key={device.id} device={device}/>
                    )}
                </div>            
        </div>
    )
})

export default DeviceList;