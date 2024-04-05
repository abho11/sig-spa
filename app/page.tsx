
import Header from "./Header";
import Events from "./Events";
import Head from 'next/head';
import MedicalCard from "@/app/MedicalCard";
import FAQ from "@/app/FAQ";
import Pharmacies from "@/app/Pharmacies";
import About from "@/app/About";
import Footer from "@/app/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Utah's Cannabis Community</title>
                <meta name="description" content="A community page for medical cannabis in Utah" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Events />
            <MedicalCard />
            <FAQ/>
            <Pharmacies />
            <About/>
            <Footer/>

        </>
    );
}
