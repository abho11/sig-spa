import Link from 'next/link';

const pharmaciesData = [
    {
        name: "Dragonfly Wellness",
        addresses: ["711 South State Street, Salt Lake City UT 84111", "20 Main Street, Price UT 84501"],
        phoneNumbers: ["801-413-6945", "435-637-3770"],
        website: "www.dragonflywellness.com"
    },
    {
        name: "Bloc Pharmacy",
        addresses: ["10392 South Jordan Gateway South Jordan UT 84095", "1624 S Convention Center Dr. St. George UT 84790"],
        phoneNumbers: ["385-249-9400", "435-216-3400"],
        website: "www.blocdispensary.com"
    },
    {
        name: "Beehive Farmacy",
        addresses: [
            "1991 S 3600 W Salt Lake City UT 84004",
            "870 W 1150 S Suite C Brigham City UT 84032"
        ],
        phoneNumbers: ["385-212-0088", "435-919-0966"],
        website: "www.beehivefarmacy.com"
    },
    {
        name: "Cannabist",
        addresses: [
            "484 South 1750 West Springville UT 84663"
        ],
        phoneNumbers: ["385-327-0922"],
        website: "www.gocannabist.com"
    },
    {
        name: "Curaleaf",
        addresses: [
            "3633 N Thanksgiving Way, Lehi UT 84043",
            "1351 Kearns Blvd Suite 110-B Park City UT 84060",
            "222 N Draper Ln Provo UT 84601",
            "757 S 1040 W Payson UT 84651"
        ],
        phoneNumbers: ["385-338-8010", "435-252-1052", "801-872-7447", "385-404-4422"],
        website: "www.curaleaf.com"
    },
    {
        name: "The Flower Shop",
        addresses: [
            "3775 S Wall Ave South Ogden UT 84405",
            "2150 N Main St. Suite 1 North Logan UT 84341"
        ],
        phoneNumbers: ["385-289-1800(Ext 1)", "385-289-1800(Ext 2)"],
        website: "www.theflowershopusa.com"
    },
    {
        name: "WholesomeCo",
        addresses: [
            "580 W 100 N Suite 1, West Bountiful UT 84101"
        ],
        phoneNumbers: ["801-695-4480"],
        website: "www.wholesome.co"
    },
    {
        name: "Zion Medicinal",
        addresses: [
            "301 S Main St. Cedar City UT 84720"
        ],
        phoneNumbers: ["435-244-4485"],
        website: "www.zionmed.co"
    }
];

const PharmacyItem = ({ name, addresses, phoneNumbers, website, isSpecialOffer }) => (
    <>
        <tr className="border-b">
            <td className="py-4 px-6">
                <div style={{fontWeight: "600", marginBottom: "10px", fontSize: "22px"}} className="font-semibold text-ltGreen">{name}</div>
                <div style={{fontWeight: "600", fontSize: "1.0rem"}} className="text-sm text-mdGrey">
                    {addresses.map((address, index) => (
                        <div key={index}>{address}</div>
                    ))}
                </div>
            </td>
            <td style={{position:"relative", left: "15%", fontWeight: "600", fontSize: "1.0rem"}} className="py-4 px-6 text-mdGrey">
                {phoneNumbers.map((phone, index) => (
                    <div key={index}>{phone}</div>
                ))}
            </td>
            <td style={{position:"relative", left: "20%", fontWeight: "600", fontSize: "1.0rem"}} className="py-4 px-6 text-mdGrey" >
                <a href={website} target="_blank" className="text-blue-600 hover:underline">{website}</a>

            </td>
        </tr>
        {isSpecialOffer && (
            <tr >
                <td colSpan="3" className="py-3 px-6 text-center">
                    <a style={{position:"relative", left:"-39%", borderRadius: "24px"}} href="#" className="bg-tan text-mdGreen font-medium py-2 px-4 rounded-full inline-block">
                        New Patient Specials
                    </a>
                </td>
            </tr>
        )}
    </>
);

const Pharmacies = () => {
    return (
        <div className="max-w-6xl mx-auto p-6" id="pharmacies">
            <h2 style={{marginBottom: "-20px", fontSize: "2.0rem", fontWeight:"600"}} className="text-3xl font-bold text-dkGreen mb-6">Utah Medical Cannabis Pharmacies</h2>

            <table style={{marginBottom:"60px"}} className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 py-3 px-6 uppercase font-semibold text-sm text-left">Pharmacy</th>

                    <th className="w-1/4 py-3 px-6 uppercase font-semibold text-sm text-left">Address</th>
                    <th className="w-1/4 py-3 px-6 uppercase font-semibold text-sm text-left">Phone Number</th>
                    <th className="w-1/4 py-3 px-6 uppercase font-semibold text-sm text-left">Website</th>
                </tr>
                </thead>
                <tbody >
                {pharmaciesData.map((pharmacy, index) => (
                    <PharmacyItem key={index} {...pharmacy} isSpecialOffer={index === 0} />
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default Pharmacies;
