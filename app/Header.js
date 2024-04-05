import Image from 'next/image';
import Link from 'next/link';
import bgImg from "../public/images/TopHeaderImage.png"
import logoImg from "../public/images/UtahGrownLogoWhiteBorder.png"

const Header = () => {
    return (
        <div  className="flex flex-col w-full justify-center bg-white relative">
            <nav style={{margin: "20px", fontWeight: "600"}} className="undefined absolute z-10 top-3 bg-transparent w-full text-sm md:text-base header-nav">
                <div className="navLinks flex flex-wrap flex-row gap-1 md:justify-between justify-around max-w-6xl xl:mx-auto md:px-2 xl:px-0 w-full text-dkGreen font-semibold">
                    <Link legacyBehavior href="#Appointments"><a className="hover:underline">APPOINTMENTS</a></Link>
                    <Link legacyBehavior href="#MedicalCardInfo"><a className="hover:underline">MEDICAL CARD INFO</a></Link>
                    <Link legacyBehavior href="#faq"><a className="hover:underline">FAQs</a></Link>
                    <Link legacyBehavior href="#pharmacies"><a className="hover:underline">PHARMACIES</a></Link>
                    <Link legacyBehavior href="#about"><a className="hover:underline">ABOUT</a></Link>
                </div>
            </nav>
            <div style={{ height: "700px", width: "100%" }} className="bgContainer relative mx-auto w-full overflow-hidden flex items-center justify-center">
                <Image

                    src={bgImg}
                    alt="Utah Landscape background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    style={{ width: "100%" }}
                />
                <div className="absolute z-10" style={{ maxWidth: '1920px', width: '100%', top: '300%', left: '5%', transform: 'translateY(-50%)' }}>
                    <div className="header-logo-container flex justify-center items-center" style={{ height: '100%' }}>
                        <Image
                            className="header-logo"
                            src={logoImg}
                            alt="Utah Grown"
                            width={950}
                            height={330}
                            objectFit="cover"
                            priority
                        />

                    </div>

                </div>
                <div style={{ position: "relative", top: "323px"}} className="header-green-bar bg-mdGreen w-full h-12"></div>
            </div>


            <h1 className="header-title bg-white text-center text-xl md:text-3xl text-mdGreen py-2">
                Utah’s Cannabis Community
            </h1>

        </div>
    );
};

export default Header;
