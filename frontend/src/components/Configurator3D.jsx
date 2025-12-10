import React, { useState } from 'react';

const Configurator3D = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Config state
    const [selectedModel, setSelectedModel] = useState('Sofá Chester');
    const [selectedWood, setSelectedWood] = useState('Mogno');
    const [selectedFinish, setSelectedFinish] = useState('Natural');

    const toggleConfig = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`configurator ${isOpen ? 'active' : ''}`}>
            <div className="toggle-configurator" onClick={toggleConfig}>
                <i className="fas fa-cog"></i> Personalizar
            </div>
            <div className="config-header">
                <h3>Personalizador 3D</h3>
                <button className="close-config" onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
                    <i className="fas fa-times"></i>
                </button>
            </div>

            <div className="config-option">
                <h4>Modelo</h4>
                <div className="option-grid">
                    <div className={`option-item ${selectedModel === 'Sofá Chester' ? 'active' : ''}`} onClick={() => setSelectedModel('Sofá Chester')}>
                        <img src="https://via.placeholder.com/100x80/8B4513/FFFFFF?text=Sof%C3%A1" alt="Sofá" />
                        <span>Sofá Chester</span>
                    </div>
                    <div className={`option-item ${selectedModel === 'Mesa Jantar' ? 'active' : ''}`} onClick={() => setSelectedModel('Mesa Jantar')}>
                        <img src="https://via.placeholder.com/100x80/A0522D/FFFFFF?text=Mesa" alt="Mesa" />
                        <span>Mesa Jantar</span>
                    </div>
                    <div className={`option-item ${selectedModel === 'Cama King' ? 'active' : ''}`} onClick={() => setSelectedModel('Cama King')}>
                        <img src="https://via.placeholder.com/100x80/CD853F/FFFFFF?text=Cama" alt="Cama" />
                        <span>Cama King</span>
                    </div>
                </div>
            </div>

            <div className="config-option">
                <h4>Madeira</h4>
                <div className="option-grid">
                    <div className={`option-item ${selectedWood === 'Mogno' ? 'active' : ''}`} onClick={() => setSelectedWood('Mogno')}>
                        <img src="https://via.placeholder.com/100x80/8B4513/FFFFFF" alt="Mogno" />
                        <span>Mogno</span>
                    </div>
                    <div className={`option-item ${selectedWood === 'Peroba Rosa' ? 'active' : ''}`} onClick={() => setSelectedWood('Peroba Rosa')}>
                        <img src="https://via.placeholder.com/100x80/A0522D/FFFFFF" alt="Peroba" />
                        <span>Peroba Rosa</span>
                    </div>
                    <div className={`option-item ${selectedWood === 'Teca' ? 'active' : ''}`} onClick={() => setSelectedWood('Teca')}>
                        <img src="https://via.placeholder.com/100x80/CD853F/FFFFFF" alt="Teca" />
                        <span>Teca</span>
                    </div>
                </div>
            </div>

            <div className="config-option">
                <h4>Acabamento</h4>
                <div className="option-grid">
                    <div className={`option-item ${selectedFinish === 'Natural' ? 'active' : ''}`} onClick={() => setSelectedFinish('Natural')}>
                        <img src="https://via.placeholder.com/100x80/E8DCC5/000000?text=Natural" alt="Natural" />
                        <span>Natural</span>
                    </div>
                    <div className={`option-item ${selectedFinish === 'Envelhecido' ? 'active' : ''}`} onClick={() => setSelectedFinish('Envelhecido')}>
                        <img src="https://via.placeholder.com/100x80/3E2723/FFFFFF?text=Envelhecido" alt="Envelhecido" />
                        <span>Envelhecido</span>
                    </div>
                    <div className={`option-item ${selectedFinish === 'Terracota' ? 'active' : ''}`} onClick={() => setSelectedFinish('Terracota')}>
                        <img src="https://via.placeholder.com/100x80/9C3D2B/FFFFFF?text=Terracota" alt="Terracota" />
                        <span>Terracota</span>
                    </div>
                </div>
            </div>

            <button className="btn" style={{ width: '100%', marginTop: '20px' }}>
                <i className="fas fa-save"></i> Salvar Projeto
            </button>
        </div>
    );
};

export default Configurator3D;
