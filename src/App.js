import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import { Items } from './components/Items';
import data from './components/data';

// To get the categories (non-repeating), we use new Set().
// Note that it returns a SET.
// To get them in an array; save in a variable, enclose with [],
// and use spread operator ( ... ).
// 'all' was added as this is not in the categories but we
// want it included in the array
const catUnique = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(data);
  // Initial value is from the 'catUnique' array we created above.
  // This will be pass as prop to Categories.js component
  const [categories, setCategories] = useState(catUnique);

  // Function called when a filter button item is clicked.
  // It receives an argument that will be used to filter categories.
  // Note that we are using 'data' and not the 'items' state.
  const filterMenu = (cat) => {
    if (cat === 'all') {
      setItems(data);
      return;
    }
    const filteredMenu = data.filter((item) => item.category === cat);
    setItems(filteredMenu);
  };

  return (
    <main className='container'>
      <h1 className='text-center my-lg'>our menu</h1>
      <div className='underline'></div>
      <Categories filterMenu={filterMenu} categories={categories} />
      <section className='cards'>
        <Items items={items} />
      </section>
    </main>
  );
};

export default App;
