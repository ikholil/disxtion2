import React from 'react';

const Title = ({text}) => {
    return (
        <h1 className='text-white text-left text-[50px] leading-none sm:text-[70px] lg:text-[5rem] xl:text-title font-bold my-5'>
          {text}  
        </h1>
    );
};

export default Title;