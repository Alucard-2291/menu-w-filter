import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <p>{menuItems[0].title}</p>
        </div>
        <Categories />
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
