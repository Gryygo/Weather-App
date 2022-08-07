import { FooterStyles } from "./styles"
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

export const Footer = () => {
    return (
        <FooterStyles>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Gryygo/Weather-App">
                <BsGithub className="icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabriel-leitao/">
                <BsLinkedin className="icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/yangyrru">
                <BsTwitter className="icon" />
            </a>
        </FooterStyles>
    )
}