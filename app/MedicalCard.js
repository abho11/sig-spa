import Image from 'next/image';
import Link from 'next/link';
import reviewBanner from '../public/images/Updated Assets/Review Banner.png';
import consultationBanner from '../public/images/Consultation.png';

const MedicalCard = () => {
    return (
        <div className="max-w-6xl mx-auto p-6" id="MedicalCardInfo">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="manImg" style={{width: "680px", height: "500px", marginBottom: "40px"}} >

                    <Image
                        src={consultationBanner}
                        alt="Doctor consulting with a patient"
                    />
                </div>

                <div style={{width: "570px", position:"relative", top:"-5px"}} className="cardText lg:w-1/2 lg:pl-12">
                    <h2 style={{fontSize: "2.4rem", fontWeight: "600"}} className="text-dkGreen">Utah Medical Cards</h2>
                    <p  style={{lineHeight: "40px"}} className="mb-4 text-dkGreen">
                        A medical cannabis card, also known as a medical marijuana card, is a state-issued identification card that allows
                        qualified patients to legally purchase and use medical
                        cannabis for the treatment of specific medical conditions.
                        In Utah, a card is required to access and purchase medical cannabis products from state-licensed dispensaries.
                        Having a medical card does not allow you to possess any
                        cannabis product but only the products you purchased
                        under your PAT (Medical Card ID number).
                    </p>

                </div>
            </div>

            <div className="reviewCon mt-6">
                <h2 style={{fontSize: "1.9rem", fontWeight: "400", position: "relative", top: "118px", left: "7%"}} className="text-white">We’d love to hear from you!</h2>
                <Link legacyBehavior href={"#"}>
                    <a style={{ position:"relative", top:"156px", left: "10%"}} className="bg-tan rounded-full text-center text-base lg:text-xl font-medium py-3 px-8 text-mdGreen hover:text-black hover:bg-[#e8d1ba] text-2xl">
                        Review us here!
                    </a>
                </Link>
                <Image style={{width:"100%"}}
                    src={reviewBanner}
                    alt="Review Banner"
                    width={1057}
                    height={737}
                />
            </div>
        </div>
    );
};

export default MedicalCard;
