import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';

export default function App() {

    return (
        <>
            <Header />
            <main className="main">
                <section className="section section--orange">
                    <Banner />
                    <About />
                </section>
            </main>
        </>
    );
}
