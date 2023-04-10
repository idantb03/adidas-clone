import React from 'react';
import BestOfAdidas from '../Cards/BestOfAdidas';
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";

const flickityOptions = {
    initialIndex: 2
}

const BestOfAdidasCarousel = ({prop}) => {
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
                    <BestOfAdidas img={data.img} title={data.title} description={data.desc} price={data.price} url="" />
                </div>
            ))
        }
      </Flickity>
    );
}
 
export default BestOfAdidasCarousel;