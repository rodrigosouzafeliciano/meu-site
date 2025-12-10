import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-title">
                    <h2>Nossa Essência</h2>
                    <p className="subtitle">Desde 2022, transformamos madeiras nobres em peças que contam histórias e emocionam gerações</p>
                </div>
                <div className="about-container">
                    <div className="about-img">
                        <img src="https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Workshop RG Móveis Rústicos" />
                        <div className="gold-stamp"></div>
                    </div>
                    <div className="about-content">
                        <h3>Artesanato que Transcende o Tempo</h3>
                        <p>Cada móvel da RG é uma narrativa de tradição, sofisticação e conexão com o essencial. Nosso mestre marceneiro preserva técnicas ancestrais enquanto inovam em design contemporâneo.</p>
                        <p>Utilizamos exclusivamente madeiras nobres de origem sustentável e demolição controlada, garantindo não apenas beleza, mas um legado de responsabilidade ambiental.</p>

                        <div className="features">
                            <div className="feature">
                                <i className="fas fa-tree"></i>
                                <div className="feature-content">
                                    <h4>Madeira Sustentável</h4>
                                    <p>Matéria-prima certificada FSC e de demolição controlada</p>
                                </div>
                            </div>
                            <div className="feature">
                                <i className="fas fa-hands"></i>
                                <div className="feature-content">
                                    <h4>Artesanato Manual</h4>
                                    <p>Detalhes esculpidos à mão por mestres com mais de 20 anos de experiência</p>
                                </div>
                            </div>
                            <div className="feature">
                                <i className="fas fa-award"></i>
                                <div className="feature-content">
                                    <h4>Qualidade Garantida</h4>
                                    <p>Garantia vitalícia contra defeitos de fabricação</p>
                                </div>
                            </div>
                            <div className="feature">
                                <i className="fas fa-palette"></i>
                                <div className="feature-content">
                                    <h4>Personalização</h4>
                                    <p>Soluções sob medida para seu espaço e estilo de vida</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
