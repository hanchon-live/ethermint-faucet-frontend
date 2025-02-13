import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Image from "react-bootstrap/Image";
import ethermintLogo from "../img/ethermintLogo.png";
import styled from "styled-components";
import AuthenticationButton from "./auth/AuthenticationButton";

const StyledNav = styled(Nav)`
     {
        flex-direction: row;
        button {
            margin-left: 1em;
        }

        @media (max-width: 500px) {
            button {
                font-size: 12px;
            }
            @media (max-width: 350px) {
                button {
                    font-size: 10px;
                }
            }
        }
    }
`;

const StyledCollapse = styled(Navbar.Collapse)`
     {
        flex-basis: auto;
        &.collapse:not(.show) {
            display: flex;
        }
    }
`;

const StyledBrandText = styled(Navbar.Brand)`
     {
        align-items: center;
        display: flex;
        span {
            padding-left: 0.2em;
            color: white;
        }

        @media (max-width: 500px) {
            span {
                font-size: 14px;
            }
            @media (max-width: 350px) {
                span {
                    font-size: 10px;
                }
            }
        }
    }
`;

export const NavbarBase = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <StyledBrandText href="/">
                    <Image alt="Ethermint logo" src={ethermintLogo} width="30" height="30" />
                    <span> Ethermint</span>
                </StyledBrandText>
                <StyledCollapse id="ethermint-nav" className="justify-content-end">
                    <StyledNav>
                        <AuthenticationButton />
                    </StyledNav>
                </StyledCollapse>
            </Container>
        </Navbar>
    );
};
