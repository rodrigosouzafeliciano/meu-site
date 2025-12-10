import React from 'react';

const ARModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="ar-modal active" id="arModal">
            <div className="ar-content">
                <div className="close-ar" onClick={onClose}>&times;</div>
                <div className="ar-view">
                    {/* Visualizador AR/3D */}
                    <div style={{ width: '100%', height: '100%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-cube" style={{ fontSize: '80px', marginBottom: '20px' }}></i>
                            <p>Visualizador AR/3D</p>
                            <p>Mova seu dispositivo para visualizar o móvel em seu ambiente</p>
                        </div>
                    </div>
                </div>
                <div className="ar-toolbar">
                    <div className="ar-btn"><i className="fas fa-undo"></i></div>
                    <div className="ar-btn"><i className="fas fa-paint-brush"></i></div>
                    <div className="ar-btn"><i className="fas fa-ruler-combined"></i></div>
                    <div className="ar-btn"><i className="fas fa-camera"></i></div>
                </div>
            </div>
        </div>
    );
};

export default ARModal;
