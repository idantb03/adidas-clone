import React from 'react';
import HotProducts from '../Cards/HotProducts';
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";

const flickityOptions = {
    initialIndex: 2
}


const HotProductsCarousel = ({prop}) => {
    return (
        <Flickity
        className={'carousel'} 
        elementType={'div'} 
        options={flickityOptions} 
        disableImagesLoaded={false} 
        reloadOnUpdate 
        static
      >
        {
            prop.map((data, index) => (
                <div className='px-2'>
                <HotProducts img={data.img} title={data.title} description={data.desc} url="" />
                </div>
            ))
        }
      </Flickity>
      );
}
 
export default HotProductsCarousel;