import { Flex, Icon, Link, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaGitlab, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import '../../styles/glow-on-hover.css';
const inialLinks = [
    { icon: FaGitlab, link: "https://gitlab.com/oscar.roman", tooltip: 'CHECK MY GITLAB PROFILE', id: 1 },
    { icon: FaGithub, link: "https://github.com/oscardrm", tooltip: 'CHECK MY GITHUB PROFILE', id: 2 },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/o-roman/", tooltip: 'CHECK MY LINKEDIN', id: 3 },
    { icon: FaEnvelope, link: "mailto:oscardario.roman@gmail.com", tooltip: 'SEND ME A MAIL', id: 4 },
    { icon: FaWhatsapp, link: "https://wa.me/56987030306", tooltip: 'WRITE ME ON WHATSAPP', id:5 },
];
function LinksSection() {

    const downloadCV = () => {
        window.open('https://drive.google.com/file/d/15OcmHyCitySuT6yA3ecE3dnFI9xRFJoF/view?usp=share_link', '_blank');
    }

    return (
        <>
            <Flex align="center" justify="center">
                {
                    inialLinks.map((x, i) => {
                        return (
                            <Tooltip label={x.tooltip} key={x.id}>
                                <Link href={x.link} isExternal >
                                    <Icon as={x.icon} boxSize={20} padding={2} className="icon-hover" />
                                </Link>
                            </Tooltip>

                        )
                    })
                }
            </Flex>

            <Flex align="center" justify="center" pt={4}>
                <button className="glow-on-hover" type="button" onClick={downloadCV}>DOWNLOAD MY CV</button>
            </Flex>
        </>
    );
}

export default LinksSection;