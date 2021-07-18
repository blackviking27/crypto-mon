import React from 'react'
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer(){
    return(
        <div className="footer-container" >
            <div className="github-link-container">
                <a href="https://github.com/blackviking27/crypto-mon" >
                    Open Sourced <span style={{padding: 5}} ><GitHubIcon style={{ fontSize: 20 }}  /></span> 
                </a>
            </div>
        </div>
    )
}