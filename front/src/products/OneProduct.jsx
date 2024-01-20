import React, { useState } from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';
import axios from 'axios';
import '../../src/index.css'; // Import your CSS file

const OneProduct = ({ e }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const placeOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/place-order', {
        buyerId: '65abddfaa20a014d52d72b60', // Replace with the actual buyer ID
        productId: e._id, // Use the product's actual ID
        quantity: 2, // You can adjust the quantity as needed
      });

      // Order placed successfully, you can handle the response as needed
      console.log('Order placed:', response.data);

      // Close the confirmation modal after placing the order
      handleCloseConfirmationModal();

      // Set the state to display a congratulatory alert
      setIsOrderPlaced(true);

      // Reset the state after a short delay (you can adjust the delay as needed)
      setTimeout(() => {
        setIsOrderPlaced(false);
      }, 3000);
    } catch (error) {
      // Handle errors
      console.error('Failed to place order:', error.message);
    }
  };

  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleImageInModalClick = (event) => {
    // Prevent the click event from bubbling up to the modal overlay
    event.stopPropagation();
  };

  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
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
        <button className="card-btn" onClick={openConfirmationModal}>
          <PiShoppingCartLight />
        </button>
      </div>

      {isImageModalOpen && (
        <div className="modal-overlay" onClick={handleCloseImageModal}>
          <div className="modal-content" onClick={handleImageInModalClick}>
            <img className="modal-image" src={e.imageUrl} alt={e.name} />
          </div>
        </div>
      )}

      {isConfirmationModalOpen && (
        <div className="confirmation-modal-overlay" onClick={handleCloseConfirmationModal}>
          <div className="confirmation-modal-content">
            <p>Are you sure you want to buy {e.name}?</p>
            <button className="confirm-button" onClick={placeOrder}>
              Confirm Purchase
            </button>
          </div>
        </div>
      )}

      {isOrderPlaced && (
        <div className="congratulations-alert">
          <p>Congratulations! Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
};

export default OneProduct;
