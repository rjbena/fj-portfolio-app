import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ReactResizeDetector from "react-resize-detector";

import ActiveLink from "./ActiveLink";
import { isAuthorized } from "../../utils/auth0";

const BsNavLink = (props) => {
  const { href, title, className } = props;
  return (
    <ActiveLink href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  );
};

const LoginLink = () => (
  <a className="nav-link port-navbar-link" href="/api/v1/login">
    Login
  </a>
);
const LogoutLink = () => (
  <a className="nav-link port-navbar-link" href="/api/v1/logout">
    Logout
  </a>
);

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => {
        setIsOpen(!isOpen);
      }}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Create Portfolio"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/blogs/editor"
            title="Create Blog"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const Header = ({ user, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <div>
          <Navbar
            className={`port-navbar port-default absolute ${
              width < 768 && isOpen ? "is-open" : "is-close"
            }`}
            color="transparent"
            dark
            expand="md"
          >
            <Link href="/">
              <a className="navbar-brand port-navbar-brand">
                Ricardo Benavides
              </a>
            </Link>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/" title="Home" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/about" title="About" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/portfolios" title="Portfolios" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/blogs" title="Blogs" />
                </NavItem>
                <NavItem className="port-navbar-item">
                  <BsNavLink href="/cv" title="Cv" />
                </NavItem>
              </Nav>
              <Nav navbar>
                {!loading && (
                  <>
                    {!user ? (
                      <>
                        <NavItem className="port-navbar-item">
                          <LoginLink />
                        </NavItem>
                      </>
                    ) : (
                      <>
                        {isAuthorized(user, "admin") && <AdminMenu />}
                        <NavItem className="port-navbar-item">
                          <LogoutLink />
                        </NavItem>
                      </>
                    )}
                  </>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
