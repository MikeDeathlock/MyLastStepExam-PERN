import React, {useState} from "react";
import {Container, Button} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import DeleteDevice from "../components/modals/DeleteDevice";


const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false);

    return (
        <Container className="d-flex flex-column p-2 admin-flex" style={{minHeight: window.innerHeight - 54}}>
            <div className="d-flex flex-column">
                <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>Добавити тип</Button>
                <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setBrandVisible(true)}>Добавити бренд</Button>
                <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeviceVisible(true)}>Добавити пристрій</Button>
                <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeleteDeviceVisible(true)}>Видалити пристрій</Button>
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                <DeleteDevice show={deleteDeviceVisible} onHide={() => setDeleteDeviceVisible(false)} />
            </div>
            
        </Container>
    );
}

export default Admin;
