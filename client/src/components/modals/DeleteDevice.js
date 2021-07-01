import React, {useContext, useEffect} from "react";
import {Modal,Button} from "react-bootstrap";
import {Context} from '../../index';
import {fetchDevices} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import DeleteItem from "./DeleteItem";
// import "./deleteDevice.css";


const DeleteDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);   
    
    useEffect(() => {        
        fetchDevices(null, null, 1, 30).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])
    
    

    return(
        <Modal
            show={show}
            onHide={onHide}            
            size="xl"            
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Видалити пристрій
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="bg-delete-container">                
                    <div className="delete-container">
                        {device.devices.map(device =>
                            <DeleteItem key={device.id} device={device} onhide={onHide}/>                            
                        )}
                    </div>            
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>                
            </Modal.Footer>
        </Modal>
    )
})

export default DeleteDevice;