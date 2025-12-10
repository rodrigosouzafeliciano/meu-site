import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>Histórias que Nos Inspiram</h2>
                    <p className="subtitle">Depoimentos de clientes que transformaram seus espaços com nossas peças</p>
                </div>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Comprei uma mesa de jantar da RG para minha casa de campo e foi a melhor decisão. Depois de 5 anos, com crianças e festas, ela continua perfeita. A beleza só aumenta com o tempo, ganhando personalidade."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-img">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" alt="Ana Carolina" />
                            </div>
                            <div className="author-info">
                                <h4>Ana Carolina Mendes</h4>
                                <p>Cliente desde 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Como arquiteta, sempre busco peças com alma para meus projetos. Os móveis da RG são obras de arte funcionais. O cuidado com cada detalhe e a qualidade do material fazem toda diferença no resultado final."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-img">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80" alt="Fernanda Torres" />
                            </div>
                            <div className="author-info">
                                <h4>Fernanda Torres</h4>
                                <p>Arquiteta de Interiores</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Encomendei um conjunto de jardim personalizado e fiquei impressionado com o atendimento. Da consultoria inicial à instalação, tudo foi impecável. As peças superaram minhas expectativas em durabilidade e beleza."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-img">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Roberto Almeida" />
                            </div>
                            <div className="author-info">
                                <h4>Roberto Almeida</h4>
                                <p>Cliente desde 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
