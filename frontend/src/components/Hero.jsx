import React from 'react';

const Hero = ({ onOpenAR }) => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>ELEGÂNCIA RÚSTICA COM ALMA CONTEMPORÂNEA</h1>
                <p>Móveis artesanais que contam histórias, feitos para durar gerações com a beleza do tempo</p>
                <div className="hero-buttons">
                    <a href="#collections" className="btn" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
                    }}>Explorar Coleções</a>
                    <a href="#contact" className="btn btn-outline" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}>Agendar Visita</a>
                </div>
                <a href="#" className="ar-experience" onClick={(e) => {
                    e.preventDefault();
                    onOpenAR();
                }}>
                    <i className="fas fa-vr-cardboard"></i> Experimente em Realidade Aumentada
                </a>
            </div>
        </section>
    );
};

export default Hero;
