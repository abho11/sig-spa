import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/images/Updated Assets/Number1.png'
import img2 from '../public/images/Updated Assets/Number2.png'
import img3 from '../public/images/Updated Assets/Number3.png'
import awaitImg from '../public/images/Updated Assets/AwaitingCert-Image.png'
import mockBanner from '../public/images/MockBannerAd.png'


const EventCard = ({ location, date, time, description, buttonText }) => (
    <div style={{width: "100%", height: "auto", marginBottom: "10px"}} className="flex flex-row items-center justify-between border border-dkGreen rounded-lg p-4 bg-ltGrey">
        <div style={{marginLeft: "50px", width:"120px"}} className="text-ltGreen flex-1 flex-col justify-start">
            <h3 className="text-ltGreen text-2xl font-bold">{location}</h3>
        </div>
            <div style={{width: "600px"}} className="flex-1 flex flex-col justify-center items-start">
            <time className="text-lg text-mdGreen" style={{fontSize: "2rem", fontWeight: "900" , marginBottom: "10px", marginTop: "20px"}}>{date}</time>
            <p style={{marginBottom: "10px"}} className=" text-ltGreen text-2xl">{time}</p>
            <p className=" text-ltGreen text-2xl ">{description}</p>
        </div>
        <div className="flex-1 flex justify-end">
        <Link legacyBehavior href={"#"}>
            <a style={{ marginRight: "50px"}} className="bg-tan rounded-full text-center text-base lg:text-xl font-medium py-3 px-8 text-mdGreen hover:text-black hover:bg-[#e8d1ba] text-2xl">
                {buttonText}
            </a>
        </Link>
        </div>
    </div>
);
const StepsSection  = () => (
    <div style={{marginTop: "40px"}} className="my-8 p-4 text-center">
        <h2 style={{ fontSize: "1.7rem", fontWeight: "600", marginBottom: "40px"}} className="text-2xl font-bold mb-6 text-dkGreen">Things to know before your appointment</h2>
        <div className="flex flex-col items-center">
            {/* Step 1 */}
            <div className="flex items-start mb-4">
                <div className="text-4xl text-green-600 mr-2">
                    <Image src={img1} alt="1." width={68} height={68} /></div>
                <div style={{marginTop: "20px", marginLeft: "50px"}} className="flex-1">
                    <h3 style={{fontSize: "1.1rem"}} className="text-xl font-semibold mb-2 text-mdGreen">You're going to register with the state of Utah. You can start this before you arrive.</h3>
                    <div style={{margin: "27px"}} className="flex-1  items-center mb-2">
                        <a style={{position: "relative", left: "-17%"}} href="#" className="bg-tan text-mdGreen font-medium py-2 px-4 rounded-full inline-block mr-4">UtahID.org</a>
                        <span style={{position: "relative", left: "-47px", fontWeight: "500"}}>Obtain access to your Utah Digital ID</span>
                    </div>
                    <div  className="flex-1 justify-center items-center mb-2">
                        <a style={{position: "relative", left: "1%"}} href="#" className="bg-tan text-mdGreen font-medium py-2 px-4 rounded-full inline-block mr-4">EVS.Utah.gov</a>
                        <span style={{position: "relative", left: "8%", fontWeight: "500"}}>Fill out all the fields until you get to "Awaiting Certification" status</span>
                    </div>
                    <Image style={{ position: "relative", marginTop: "20px", left: "27%", marginBottom: "40px"}} src={awaitImg} alt="Awaiting Certification" />
                </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start mb-4">
                <div style={{position: "relative", left:"-28%"}} className="text-4xl text-green-600 mr-2">
                    <Image src={img2} alt="2" width={68} height={68} /></div>

                <div style={{ position: "relative", left: "-19%", top: "19px"}} className="flex">
                    <h3 style={{fontSize: "1.1rem"}} className="text-xl font-semibold mb-2 text-mdGreen">Check in with your QMP</h3>
                    <ul style={{fontWeight: "500", listStyle: "auto", textAlign: "left", position: "relative", left:"15%"}} className="list-disc list-inside text-mdGreen">
                        <li>QMP Registration</li>
                        <li>Medical Evaluation/Consultation</li>
                        <li>Payment</li>
                    </ul>
                </div>
            </div>

            {/* Step 3 */}
            <div style={{marginTop: "60px"}} className="flex items-start mb-4">
                <div style={{position: "relative", left:"-22%"}}  className="text-4xl text-green-600 mr-2">
                    <Image src={img3} alt="3." width={68} height={68} /></div>

                <div className="flex-1">
                    <h3 style={{fontSize: "1.1rem", position:"relative", top:"21px", left:"-44%"}} className="text-xl font-semibold mb-2 text-mdGreen">Renewal or New Patient?</h3>
                    <p className=" text-mdGreen" style={{position:"relative", top:"-22px", left:"31%", fontWeight: "500"}}>If this is a renewal, congratulations you are ready to shop...</p>
                    <p  className=" text-mdGreen" style={{position:"relative", top:"-8px", left:"36%", fontWeight: "500"}}>If you are a new patient, here are some helps to get you started...</p>
                    <ul className="list-inside text-mdGreen" style={{listStyle: "auto", textAlign: "left", position: "relative", left: "55%",top: "20px", marginBottom: "20px"}}>
                        <li style={{fontWeight: "600", marginBottom: "5px"}} className="text-mdGreen ">Meet with Pharmacist</li>
                        <li style={{fontWeight: "600", marginBottom: "5px"}} className="text-mdGreen">Set up your Portal Account</li>
                        <li style={{fontWeight: "600", marginBottom: "40px"}} className="text-mdGreen">Start Shopping</li>
                    </ul>
                    <p style={{fontWeight: "600", marginBottom: "40px", position: "relative", left: "44%"}} className="text-mdGreen">**Don't forget to take advantage of new patient deals**</p>
                </div>
            </div>
            <Image style={{width: "70%", height: "100%", marginBottom:"60px", marginTop: "60px"}} src={mockBanner} alt="Leaf Nation Advertise Banner" width={1181} height={268} />
    </div>

    </div>

);

const EventsSection = () => {
    return (
        <>
        <div className="flex flex-col gap-8 items-center max-w-6xl mx-auto px-2 xl:px-0 w-full" id="Appointments">
            <h2 className="text-5xl sm:text-5xl text-dkGreen text-center font-bold">
                Upcoming Utah Medical Card Events
            </h2>
            <EventCard
                location="Downtown SLC"
                date="Tuesday, October 3rd 2023"
                time="9:00 am - 2:00pm"
                description="New Patients and Renewals"
                buttonText="Book Time"
            />
            <EventCard
                location="Price UT"
                date="Thursday, October 19th 2023"
                time="9:00 am - 4:00pm"
                description="Renewals Only"
                buttonText="Book Time"
            />
            <EventCard
                location="<Other Location>"
                date="Friday, November 10th 2023"
                time="10:00 am - 2:00pm"
                description="Special Event for Veterns"
                buttonText="Book Time"
            />
        </div>
    <StepsSection />
</>
    );
};


export default EventsSection;
