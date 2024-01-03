import React from 'react';

function ImgCell({ value }) {
  return <img src={value} alt='avatar' className='w-auto h-full' />;
}

export default ImgCell;