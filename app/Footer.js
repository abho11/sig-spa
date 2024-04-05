import Image from 'next/image';
import Link from 'next/link';
import  footerLogo from "../public/images/UtahGrownLogo-Green.png"

const Footer = () => {
    return (

        <footer className="bg-mdGreen">
            <div style={{borderTop: "3px solid #103c00", position: "relative", top: "-170px", zIndex: "0"}}></div>
            <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between">

                <div className="footerLogo flex items-center">
                    <Image style={{position: "relative", top: "-150px", width:"47%"}}
                        src={footerLogo}
                        alt="Utah Grown"
                        width={150}
                        height={50}
                        objectFit="contain"
                    />
                    <span style={{ position: "relative", top: "-110px", color: "#35711f", left: "11%", width: "60%", fontSize: "20px"}} className="text-white ml-4">UTAH'S CANNABIS COMMUNITY</span>
                </div>
                <div className="copyText text-white">
                    ©2023 All Rights Reserved.
                </div>
                <div className="footerLinks">
                    <Link legacyBehavior href="#">
                        <a style={{marginLeft: "20px", marginRight: "50px"}} className="text-white  mx-2">Terms and Conditions</a>
                    </Link>
                    <Link  legacyBehavior href="#">
                        <a className="text-white  mx-2">Privacy Policy</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
