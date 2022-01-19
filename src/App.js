import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Minting from './components/Product/Product';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {

    return (
        <>
            <Header />
            <main className="main">
                <section className="section section--orange">
                    <Banner />
                    <div className="container">
                        <About />
                    </div>
                    <Roadmap />
                </section>
                <Features />
                <Tokenomics />
                <Minting />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
