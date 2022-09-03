import React, { useState } from 'react';
import menuItem from '../../utilities/foodItem';
import ButtonContainer from '../ButttonContainer/ButtonContainer';
import MenuItems from '../MenuItems/MenuItems';
import './Home.css';
import logo from '../../logo.png';

const Home = () => {
  // ---------------------------------------
  // =============== JS AREA ===============
  // ---------------------------------------

  // **** import menuItem ****
  const allCategory = [
    'all',
    ...new Set(menuItem.map((item) => item.category)),
  ];

  // **** declare state ****
  const [resMenuItems, setResMenuItems] = useState(menuItem);
  const [categorys] = useState(allCategory);

  // **** filter menu item  ****
  const filterItem = (category) => {
    if ('all' === category) {
      setResMenuItems(menuItem);
      return;
    }
    const newItemCategory = menuItem.filter(
      (item) => item.category === category
    );
    setResMenuItems(newItemCategory);
  };

  // ---------------------------------------
  // =============== HTML AREA =============
  // ---------------------------------------
  return (
    <div className="home container">
      <img className="img-fluid logo" src={logo} alt="" />
      <div className="button-container py-4 d-flex justify-content-center ">
        {categorys.map((category) => (
          <ButtonContainer
            category={category}
            filterItem={filterItem}
          ></ButtonContainer>
        ))}
      </div>
      <div className="menu-item-container row">
        {resMenuItems.map((item) => (
          <MenuItems key={item.id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default Home;
