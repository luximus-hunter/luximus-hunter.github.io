import './style.scss';

import { Fragment } from 'react';

interface props {
  children: any;
  side?: 'left' | 'right';
  img?: string;
}

export default ({ children, side, img }: props) => (
  <section className={`card ${side}`}>
    {side && (
      <Fragment>
        <div className='card-line' />
        <div className='card-arrow' />
      </Fragment>
    )}
    {img && <img className='card-img' src={img} alt='card-img' />}
    <div className='card-content'>{children}</div>
  </section>
);
