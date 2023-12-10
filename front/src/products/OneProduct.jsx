import React, { useState } from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';

const OneProduct = ({ e }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-img" onClick={handleImageClick}>
        <img className="img" src={e.imageUrl} alt={e.name} />
      </div>
      <div className="card-title">{e.name}</div>
      <div className="card-subtitle">{e.category}</div>
      <hr className="card-divider" />
      <div className="card-footer">
        <div className="card-price">
          <span>$</span> {e.price}
        </div>
        <button className="card-btn" onClick={handleImageClick}>
          <PiShoppingCartLight />
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img className="modal-image" src={e.imageUrl} alt={e.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OneProduct;
