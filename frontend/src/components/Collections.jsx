import React, { useState } from 'react';

const Collections = () => {
    const [activeTag, setActiveTag] = useState('Todas as Coleções');
    const [activeFilter, setActiveFilter] = useState('Todas');

    const tags = ['Todas as Coleções', 'Linha Ouro', 'Madeira de Demolição', 'Edição Limitada', 'Novos Lançamentos', 'Coleção Exterior'];
    const filters = ['Todas', 'Sala de Estar', 'Quarto', 'Cozinha', 'Escritório', 'Exterior', 'Acabamentos'];

    // Mock data for products to demonstrate filtering if needed in future, 
    // for now static structure as per requirement to "match index.html" exactly.
    // However, I will implement the active class switching visually.

    return (
        <section className="collections" id="collections">
            <div className="container">
                <div className="section-title">
                    <h2>Coleções Exclusivas</h2>
                    <p className="subtitle">Descubra peças únicas criadas com madeiras nobres selecionadas, onde o artesanato tradicional encontra o design contemporâneo</p>
                </div>

                <div className="category-tags">
                    {tags.map(tag => (
                        <div
                            key={tag}
                            className={`category-tag ${activeTag === tag ? 'active' : ''}`}
                            onClick={() => setActiveTag(tag)}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="collection-filter">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="collection-grid">
                    {/* Produto 1 */}
                    <div className="collection-item">
                        <div className="image-container">
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Sofá Chesterfield" className="collection-img" />
                            <div className="exclusive-badge">
                                <i className="fas fa-crown"></i> LINHA OURO
                            </div>
                        </div>
                        <div className="product-info">
                            <div>
                                <h3 className="product-title">Sofá Chesterfield</h3>
                                <span className="product-category">Sala de Estar</span>
                            </div>
                            <p className="product-description">
                                Sofá de três lugares em couro envelhecido com estrutura em carvalho maciço. Detalhes artesanais em bronze envelhecido.
                            </p>
                            <div className="product-footer">
                                <div className="collection-price">R$ 1.490,00</div>
                                <button className="view-details">Ver Detalhes</button>
                            </div>
                        </div>
                    </div>

                    {/* Produto 2 */}
                    <div className="collection-item">
                        <div className="image-container">
                            <img src="https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Mesa de Jantar" className="collection-img" />
                        </div>
                        <div className="product-info">
                            <div>
                                <h3 className="product-title">Cama Eclipse</h3>
                                <span className="product-category">Quarto</span>
                            </div>
                            <p className="product-description">
                                Cama em madeira de demolição com base em ferro forjado. Acabamento em óleo natural que preserva a textura original.
                            </p>
                            <div className="product-footer">
                                <div className="collection-price">R$ 2.750,00</div>
                                <button className="view-details">Ver Detalhes</button>
                            </div>
                        </div>
                    </div>

                    {/* Produto 3 */}
                    <div className="collection-item">
                        <div className="image-container">
                            <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Cama King Size" className="collection-img" />
                            <div className="exclusive-badge">
                                <i className="fas fa-star"></i> EDIÇÃO LIMITADA
                            </div>
                        </div>
                        <div className="product-info">
                            <div>
                                <h3 className="product-title">Cama King Size Heritage</h3>
                                <span className="product-category">Quarto</span>
                            </div>
                            <p className="product-description">
                                Cama em peroba rosa com cabeceira artesanal e detalhes em fibra natural. Estrutura reforçada com juntas de encaixe preciso.
                            </p>
                            <div className="product-footer">
                                <div className="collection-price">R$ 4.990,00</div>
                                <button className="view-details">Ver Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="catalog-footer">
                    <p>Exibindo 3 de 42 peças exclusivas • Todas as peças são feitas sob encomenda com período de fabricação de 60-90 dias</p>
                </div>
            </div>
        </section>
    );
};

export default Collections;
