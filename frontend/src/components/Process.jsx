import React from 'react';

const Process = () => {
    return (
        <section className="process" id="process">
            <div className="container">
                <div className="section-title">
                    <h2>Nossa Arte em Movimento</h2>
                    <p className="subtitle">Do desenho inicial ao acabamento final, cada etapa é executada com maestria e atenção aos detalhes</p>
                </div>

                <div className="process-steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-icon">
                            <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h3>Concepção</h3>
                        <p>Desenvolvemos o conceito e os desenhos técnicos, considerando as características únicas de cada madeira e as necessidades do cliente.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-icon">
                            <i className="fas fa-cut"></i>
                        </div>
                        <h3>Seleção & Corte</h3>
                        <p>Selecionamos minuciosamente as madeiras nobres e realizamos o corte respeitando os veios naturais para realçar sua beleza.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-icon">
                            <i className="fas fa-hammer"></i>
                        </div>
                        <h3>Montagem Artesanal</h3>
                        <p>Utilizando técnicas ancestrais de marcenaria, montamos cada peça com encaixes precisos e sem uso de pregos ou colas industriais.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-icon">
                            <i className="fas fa-paint-roller"></i>
                        </div>
                        <h3>Acabamento</h3>
                        <p>Aplicação manual de óleos naturais e ceras que protegem a madeira enquanto realçam sua beleza natural e textura única.</p>
                    </div>
                </div>

                {/* Guia Sensorial de Materiais */}
                <div className="section-title" style={{ marginTop: '120px' }}>
                    <h2>Experiência Sensorial</h2>
                    <p className="subtitle">Conheça os materiais que dão vida às nossas peças através de todos os sentidos</p>
                </div>
                <div className="material-guide">
                    <div className="sensory-card">
                        <div className="sensory-icon touch-icon">
                            <i className="fas fa-hand-paper"></i>
                        </div>
                        <h4>Toque</h4>
                        <p>Superfície macia com veios naturais perceptíveis ao toque. A madeira nobre envelhecida oferece uma experiência tátil única que só o tempo pode proporcionar.</p>
                    </div>

                    <div className="sensory-card">
                        <div className="sensory-icon scent-icon">
                            <i className="fas fa-wind"></i>
                        </div>
                        <h4>Aroma</h4>
                        <p>Notas terrosas com nuances sutis de resina fresca. O aroma natural da madeira permanece mesmo após anos de uso, criando uma atmosfera acolhedora.</p>
                    </div>

                    <div className="sensory-card">
                        <div className="sensory-icon shine-icon">
                            <i className="fas fa-sun"></i>
                        </div>
                        <h4>Brilho</h4>
                        <p>Brilho suave que se intensifica com o tempo. Nossos acabamentos em óleo natural realçam a beleza sem vernizes sintéticos, mantendo a respiração da madeira.</p>
                    </div>

                    <div className="sensory-card">
                        <div className="sensory-icon age-icon">
                            <i className="fas fa-hourglass-half"></i>
                        </div>
                        <h4>Envelhecimento</h4>
                        <p>Adquire pátina dourada e veios mais marcantes. Como um bom vinho, nossos móveis melhoram com o tempo, ganhando personalidade e história.</p>
                    </div>
                </div>

                {/* Diário de Oficina */}
                <div className="section-title" style={{ marginTop: '120px' }}>
                    <h2>Diário de Oficina</h2>
                    <p className="subtitle">Nosso processo criativo em detalhes</p>
                </div>
                <div className="workshop-diary">
                    <div className="macro-shot">
                        <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1302&q=80" alt="Madeira após restauração" />
                    </div>

                    <div className="timelapse-video">
                        <div style={{ background: '#333', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <i className="fas fa-play-circle" style={{ fontSize: '4rem' }}></i>
                        </div>
                        <p>Timelapse: 80 horas de trabalho em 2 minutos</p>
                    </div>

                    <div className="restoration-story">
                        <h4>Madeira Renascida</h4>
                        <p>Detalhes que só a natureza é capaz de esculpir: peroba-rosa de demolição, com mais de 100 anos, resgatada de uma fazenda colonial do século XIX e transformada em uma autêntica cadeira de jantar.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
