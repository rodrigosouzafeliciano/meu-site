import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', msg: 'Enviando...' });

        try {
            // Using full URL for development. In production/ngrok, might need adjustment or proxy.
            // Assuming backend runs on 8080.
            const response = await fetch('https://cary-larkish-overfervently.ngrok-free.dev/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', msg: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
                setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
            } else {
                setStatus({ type: 'error', msg: 'Erro ao enviar mensagem. Tente novamente.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'error', msg: 'Erro de conexão. Verifique se o backend está rodando.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Faça Parte Dessa História</h2>
                    <p className="subtitle">Visite nossa loja-ateliê ou entre em contato para criar a peça perfeita para seu espaço</p>
                </div>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Visite Nossa Loja-Ateliê</h3>

                        <div className="contact-detail">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-text">
                                <h4>Endereço</h4>
                                <p>Laguna - SC</p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="contact-text">
                                <h4>Horário de Funcionamento</h4>
                                <p>Segunda a Sexta: 8h às 18h</p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-text">
                                <h4>Telefone</h4>
                                <p>(48) 9 9185-8402</p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <h4>Email</h4>
                                <p>contato@rgmoveisrusticos.com.br</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-pinterest"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Envie sua Consulta</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="interest">Interesse Principal</label>
                                <select
                                    id="interest"
                                    className="form-control"
                                    required
                                    value={formData.interest}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="living">Sala de Estar</option>
                                    <option value="bedroom">Quarto</option>
                                    <option value="kitchen">Cozinha</option>
                                    <option value="office">Escritório</option>
                                    <option value="outdoor">Áreas Externas</option>
                                    <option value="custom">Projeto Personalizado</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    id="message"
                                    className="form-control"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {status.msg && (
                                <div style={{
                                    marginBottom: '20px',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    backgroundColor: status.type === 'success' ? '#d4edda' : status.type === 'error' ? '#f8d7da' : '#cce5ff',
                                    color: status.type === 'success' ? '#155724' : status.type === 'error' ? '#721c24' : '#004085'
                                }}>
                                    {status.msg}
                                </div>
                            )}

                            <button type="submit" className="btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
