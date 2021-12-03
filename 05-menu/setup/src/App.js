import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Item from './Item';
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const getCategories = () => {
    const categories = ['ALL'];

    items.map((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });

    return categories;
  };

  const handleMenuClick = (menuName) => {
    if (menuName === 'ALL') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === menuName);
    setMenuItems(newItems);
  };

  const renderMenuItems = () => {
    return menuItems.map((item) => <Item item={item} />);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h1>Menu</h1>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <Categories
            handleMenuClick={handleMenuClick}
            categories={getCategories()}
          />
        </div>

        <div className='section-center'>{renderMenuItems()}</div>
      </section>
    </main>
  );
}

export default App;
