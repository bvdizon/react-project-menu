import React from 'react';

const Categories = ({ filterMenu, categories }) => {
  return (
    <div className='categories'>
      {categories.map((category, index) => {
        return (
          <button onClick={() => filterMenu(category)} key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
