import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const Menu = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // List of food items categorized by type
  const foodItems = {
    Eat: [
      { name: 'Fried Dumplings', description: 'Your choice of 5 Beef, Pork or Vegtable dumplings for 6.50$' },
      { name: 'Bibimbap', description: 'Mixed Rice and vegtables 12.00$ Add meat for 3.00$ extra' },
      { name: 'Pork Belly', description: 'Thin sliced pork belly with fried rice 10.00$' },
      { name: 'Marinated Crab', description: 'Marinated crab with a side of white rice 9.50$' },
      { name: 'Bulgogi', description: 'Marianted sliced ribeye 13.00$ ' }
    ],
    Drink: [
      { name: 'Coffee', description: 'Regular coffee 2.50' },
      { name: 'SoJu', description: 'Flavored Soju, Peach, Apple, Fruit Punch, Yogurt 12.50$' },
      { name: 'Rice Wine', description: 'Peach or Regular 8.00' },
      { name: 'Hot tea', description: 'Jasmine unsweet tea 3.00' },
      { name: 'Soda', description: 'Coke, Sprite, Diet Coke, Ginger Ale, Lemonade, refills available etc. 2.50' }
    ],
    Dessert: [
      { name: 'Mochi', description: 'Japanese rice cake with a sweet filling 4.00$' },
      { name: 'Patbingsu', description: 'Korean shaved ice dessert with sweet toppings 6.50$' },
      { name: 'Hotteok', description: 'Korean sweet pancake with a syrup filling 5.00$' },
    ]
  };

  // function to handle click on food items and open modal
  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setShowModal(true);
  };

  // function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFood(null);
  };

  return (
    <Container id="menu">
      <div className="w3-content" style={{ maxWidth: '700px' }}>
        <h5 className="text-center my-4">
          <span className="badge bg-dark text-white">THE MENU</span>
        </h5>

        {/* Food Section */}
        <h3 className="my-4">Food</h3>
        <Card className="my-4 p-4">
          {foodItems.Eat.map((food, index) => (
            <div key={index} onClick={() => handleFoodClick(food)} style={{ cursor: 'pointer' }}>
              <h5>{food.name}</h5>
              <p className="text-muted">{food.description}</p>
            </div>
          ))}
        </Card>

        {/* Drink Section */}
        <h3 className="my-4">Drinks</h3>
        <Card className="my-4 p-4">
          {foodItems.Drink.map((food, index) => (
            <div key={index} onClick={() => handleFoodClick(food)} style={{ cursor: 'pointer' }}>
              <h5>{food.name}</h5>
              <p className="text-muted">{food.description}</p>
            </div>
          ))}
        </Card>

        {/* Dessert Section */}
        <h3 className="my-4">Dessert</h3>
        <Card className="my-4 p-4">
          {foodItems.Dessert.map((food, index) => (
            <div key={index} onClick={() => handleFoodClick(food)} style={{ cursor: 'pointer' }}>
              <h5>{food.name}</h5>
              <p className="text-muted">{food.description}</p>
            </div>
          ))}
        </Card>

        {/* Bottom Image */}
        <img
          src="https://jeonjucity.kr/wp-content/uploads/2017/02/KakaoTalk_20170210_180807718-1024x634.jpg"
          alt="Restaurant"
          style={{ width: '100%', maxWidth: '1000px', marginTop: '32px' }}
        />
      </div>

      {selectedFood && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedFood.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedFood.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Menu;
