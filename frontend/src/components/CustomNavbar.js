import React from 'react';
import {Button, Nav, Navbar,
        NavbarBrand, NavItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class CustomNavbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar className="main-navbar" color="light" light expand="md">
                    <NavbarBrand href="/">FakturaPL</NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem style={{padding: '5px'}}>
                            <Button outline color="primary" href="/clients">Kontrahenci</Button>
                        </NavItem>
                        <NavItem style={{padding: '5px'}}>
                            <Button outline color="primary" href="/invoices">Faktury</Button>
                        </NavItem>
                        <NavItem style={{padding: '5px'}}>
                            <Button outline color="danger" href="/admin-panel">Panel administracyjny</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default CustomNavbar;