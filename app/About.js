import Image from 'next/image';
import aboutImage from '../public/images/NormalizeItUtah.png';

const About = () => {
    return (
        <div style={{marginBottom: "70px"}} className="container mx-auto p-6 flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6" id="about">
            <div className="aboutCon md:w-1/2">
                <h2 style={{marginBottom: "30px", fontSize: "2.1rem", fontWeight:"600"}} className="text-3xl font-bold text-dkGreen mb-6">About Utah Grown</h2>
                <p style={{fontWeight: "600", lineHeight: "40px", marginBottom:"60px"}} className="text-mdGrey mb-4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                    autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore.
                </p>
                <h2 style={{marginBottom: "15px", fontSize: "2.1rem", fontWeight:"600"}} className="text-3xl font-bold text-dkGreen mb-6">Utah Grown Office</h2>
                <p style={{fontWeight: "700", lineHeight: "40px", marginBottom:"60px", fontSize: "1.4rem"}} className="text-mdGrey">
                    730 State Street
                    <br />
                    Salt Lake City, Utah 84111
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">

                <Image style={{width: "95%" ,position: "relative", left: "23%", top: "30px", zIndex: "999"}}
                    src={aboutImage}
                    alt="Decorative image for Utah Grown"
                    width={400}
                    height={400}
                    objectFit="contain"
                    priority
                />
            </div>
        </div>
    );
};

export default About;
