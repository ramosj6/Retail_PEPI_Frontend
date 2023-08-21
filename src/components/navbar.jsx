import React, {useState, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components/macro';
import { ShoppingCart, UserCircle } from "phosphor-react";

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: rgb(19, 19, 19);
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Links = styled.div`
    margin-right: 50px;
    display: flex;
    align-items: center;
`

const UserLinks = styled(Link)`
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: 25px;
`

export const Navbar = () => {
    const [username, setUsername] = useState('');
    const [showmenu, showmenuupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/registration') {
            showmenuupdate(false);
        } else {
            showmenuupdate(true);
            let storedUsername = localStorage.getItem('username');
            if (storedUsername === '' || storedUsername === null) {
                usenavigate('/login');
            } else {
                setUsername(storedUsername);
            }
        }
    
    }, [usenavigate, location])

    return (
        <div>{ showmenu &&
          <Container>
            <Links>
              <UserLinks to="/profile">
                <UserCircle size={32} /> {username}
              </UserLinks>
              <UserLinks to="/"> Shop </UserLinks>
              <UserLinks to="/contact"> Contact </UserLinks>
              <UserLinks to="/cart">
                <ShoppingCart size={32} />
              </UserLinks>
              <UserLinks to="/login">Logout</UserLinks>
            </Links>
          </Container>
          }
        </div>
    );

}