import React from 'react'
import {HeadingText,SubHeadingText} from '../../../Styles/styles'
import {navItems} from './data'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function SideNav() {
    return (
        <SideNavbar>
            <HeadingText>Loom Automation</HeadingText>
            <section>
                <List>
                {navItems.map((navLink,index) => {
                    return(
                            <Link>
                        <li>
                            <div><img src={navLink.imageLight} alt="nav-icon"/></div>
                            <SubHeadingText>{navLink.name}</SubHeadingText>
                        </li>
                        </Link>
                    )
                })}
                </List>
            </section>
        </SideNavbar>
    )
}

const SideNavbar = styled.nav`
    width:20%;
    height:100%;
    box-shadow: 4px 0px 10px 0px #70707033;
    padding:2rem 1rem;
`
const List = styled.ul`
    disc-type: none;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:2.5rem;
    margin-top:3rem;
    a{
        width:100%;
        text-decoration:none;
        color:var(--grey);
    }
    li{
        display:flex;
        width:100%;
        height:2rem;        
        cursor:pointer;
        div{
            width:30%;  
            text-align:center;          
        }
        p{
            width:70%;
        }
        a
    }
`