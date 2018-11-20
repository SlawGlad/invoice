import React from 'react';
import {Button, Nav, Navbar,
        NavbarBrand, NavItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class CustomNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleCompany = this.toggleCompany.bind(this);
        this.state = {
            dropdownAdminPanelOpen: false,
            dropdownCompanyOpen: false,
            searchPhrase: ''
        };
    }

    toggle() {
        this.setState({
            dropdownAdminPanelOpen: !this.state.dropdownAdminPanelOpen,
        });
    }

    toggleCompany() {
        this.setState({
            dropdownCompanyOpen: !this.state.dropdownCompanyOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="main-navbar" color="light" light expand="md">
                    <NavbarBrand href="/">FakturaPL</NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem style={{padding: '5px'}}>
                            <ButtonDropdown isOpen={this.state.dropdownCompanyOpen} toggle={this.toggleCompany}>
                                 <DropdownToggle caret outline color="primary">
                                   Firmy
                                 </DropdownToggle>
                                 <DropdownMenu>
                                   <DropdownItem href="/add-company">Dodaj nową firmę</DropdownItem>
                                   <DropdownItem href="/clients">Wczytaj kontrahentów firmy</DropdownItem>
                                   <DropdownItem href="/add-company-client">Dodaj nowego kontrahenta</DropdownItem>
                                 </DropdownMenu>
                            </ButtonDropdown>
                        </NavItem>
                        <NavItem style={{padding: '5px'}}>
                            <Button outline color="primary" href="/invoices">Faktury</Button>
                        </NavItem>
                        <NavItem style={{padding: '5px'}}>
                            <ButtonDropdown isOpen={this.state.dropdownAdminPanelOpen} toggle={this.toggle}>
                                 <DropdownToggle caret outline color="danger">
                                   Panel administracyjny
                                 </DropdownToggle>
                                 <DropdownMenu>
                                   <DropdownItem href="/admin-panel/add-user">Dodaj użytkownika</DropdownItem>
                                   <DropdownItem href="/admin-panel/delete-company-client">Usuń kontrahenta</DropdownItem>
                                 </DropdownMenu>
                            </ButtonDropdown>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default CustomNavbar;