import React from 'react';

export const Items = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className='card'>
            <figure>
              <img src={img} alt='' />
            </figure>
            <footer>
              <div>
                <h3>{title}</h3>
                <p>${price}</p>
              </div>
              <p>{desc}</p>
            </footer>
          </article>
        );
      })}
    </>
  );
};
