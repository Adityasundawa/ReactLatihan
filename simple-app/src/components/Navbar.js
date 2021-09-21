import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from "../logo.svg";

class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
           
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
               <div className='btn btn-sm btn-danger'>  <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                    </span> </div>
            </Link>
           </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`;