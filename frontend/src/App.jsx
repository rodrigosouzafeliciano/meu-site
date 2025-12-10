import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';
import ScrollTop from './components/ScrollTop';
import ARModal from './components/ARModal';
import Configurator3D from './components/Configurator3D';

function App() {
    const [isAROpen, setIsAROpen] = useState(false);

    return (
        <>
            <Header />
            <Hero onOpenAR={() => setIsAROpen(true)} />
            <About />
            <Collections />
            <Process />
            <Testimonials />
            <Contact />
            <Footer />

            <WhatsappFloat />
            <ScrollTop />

            <ARModal isOpen={isAROpen} onClose={() => setIsAROpen(false)} />
            <Configurator3D />
        </>
    )
}

export default App;
