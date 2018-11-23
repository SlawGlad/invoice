import React from 'react';
import {Button, Nav, Navbar,
        NavbarBrand, NavItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class CustomNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleCompany = this.toggleCompany.bind(this);
        this.toggleInvoice = this.toggleInvoice.bind(this);
        this.state = {
            dropdownInvoiceOpen: false,
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

    toggleInvoice(){
        this.setState({
            dropdownInvoiceOpen: !this.state.dropdownInvoiceOpen
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
                                   <DropdownItem href="/clients">Przeglądaj kontrahentów firmy</DropdownItem>
                                   <DropdownItem href="/add-company-client">Dodaj nowego kontrahenta</DropdownItem>
                                 </DropdownMenu>
                            </ButtonDropdown>
                        </NavItem>
                        <NavItem style={{padding: '5px'}}>
                            <ButtonDropdown isOpen={this.state.dropdownInvoiceOpen} toggle={this.toggleInvoice}>
                                 <DropdownToggle caret outline color="primary">
                                   Faktury
                                 </DropdownToggle>
                                 <DropdownMenu>
                                   <DropdownItem href="/invoices/add-invoice">Dodaj nową fakturę</DropdownItem>
                                   <DropdownItem href="/invoices">Przeglądaj faktury</DropdownItem>
                                 </DropdownMenu>
                            </ButtonDropdown>
                        </NavItem>
                        <NavItem style={{padding: '5px'}}>
                            <ButtonDropdown isOpen={this.state.dropdownAdminPanelOpen} toggle={this.toggle}>
                                 <DropdownToggle caret outline color="danger">
                                   Panel administracyjny
                                 </DropdownToggle>
                                 <DropdownMenu>
                                   <DropdownItem href="/admin-panel/add-user">Dodaj użytkownika</DropdownItem>
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