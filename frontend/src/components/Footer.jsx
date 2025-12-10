import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-container">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <span className="logo-text">RG <span className="logo-highlight">MÓVEIS RÚSTICOS</span></span>
                        </div>
                        <p>Transformando madeiras com história em móveis para criar memórias. Desde 2022, unimos tradição artesanal e design atemporal para ambientes com alma.</p>
                        <p><strong>CNPJ:</strong> 12.345.678/0001-99</p>
                    </div>

                    <div className="footer-links">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#home">Início</a></li>
                            <li><a href="#about">Nossa História</a></li>
                            <li><a href="#collections">Coleções</a></li>
                            <li><a href="#process">Nosso Processo</a></li>
                            <li><a href="#contact">Contato</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Categorias</h4>
                        <ul>
                            <li><a href="#">Sala de Estar</a></li>
                            <li><a href="#">Dormitórios</a></li>
                            <li><a href="#">Áreas de Jantar</a></li>
                            <li><a href="#">Escritórios</a></li>
                            <li><a href="#">Móveis Externos</a></li>
                            <li><a href="#">Peças Decorativas</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Nossa Newsletter</h4>
                        <p>Receba inspirações, lançamentos exclusivos e promoções especiais diretamente no seu email.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Seu melhor email" className="newsletter-input" />
                            <button type="submit" className="newsletter-btn"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                &copy; 2025 RG Móveis Rústicos. Todos os direitos reservados. Desenvolvido com paixão por artesãos digitais.
            </div>
        </footer>
    );
};

export default Footer;
