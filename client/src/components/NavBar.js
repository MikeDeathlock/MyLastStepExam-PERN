import React, {useContext} from "react";
import {Context} from "../index";
import { NavLink, useHistory } from "react-router-dom";
import {Nav, Navbar, Button, Container} from "react-bootstrap";
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logout = () => {
        user.setIsUser({});
        user.setIsAuth(false);
        localStorage.clear();
        history.push(SHOP_ROUTE);
    }

    return (
        <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container>
                <NavLink className="navbar-brand nav-link" to={SHOP_ROUTE}>WOS</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">                        
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} className="ml-2">Адмін</Button>
                        <Button className="ml-2" variant={"outline-light"} onClick={() => logout()}>Вийти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                    </Nav>
                }
            </Container>                
        </Navbar>
    );
})

export default NavBar;
