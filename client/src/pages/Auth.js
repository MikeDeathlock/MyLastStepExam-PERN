import React, {useContext, useState} from "react";
import {Container, Form, Card, Button, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {registration, login} from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);            
            }
            user.setIsUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }
        
        

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Введіть ваш email..." value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control className="mt-3" placeholder="Введіть ваш пароль..." type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <Row className="mt-3 d-flex justify-content-between pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Немає аккаунта? 
                                <NavLink to={REGISTRATION_ROUTE}> Зареєструватись тут!</NavLink>
                            </div>
                            :
                            <div>
                                Є акаунт?
                                <NavLink to={LOGIN_ROUTE}> Увійти тут!</NavLink>
                            </div>
                        }                        
                        <Button variant={"outline-success"} onClick={click}>{isLogin ? "Увійти" : "Реєстрація"}</Button>
                    </Row>
                    
                </Form>
            </Card>            
        </Container>
    );
})

export default Auth;
