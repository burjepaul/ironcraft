import React, { useEffect, useState } from 'react';
import {ReactComponent as LeftArrow} from '../../assets/gallery-page/pagearrow-left.svg'
import {ReactComponent as RightArrow} from '../../assets/gallery-page/pagearrow-right.svg'
import photos from '../../assets/photos';
import './carousel.styles.scss';


const CarouselImages = ({galleryToShow}) => {
    console.log(photos[galleryToShow])

    const images = photos[galleryToShow]

    useEffect(() => {
      setCurrentIndex(0)
    }, [galleryToShow])
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    let imagesToShow

    if (currentIndex+3 <= images.length){
      imagesToShow = images.slice(currentIndex, currentIndex+3)
    }else{
      imagesToShow = images.slice(currentIndex, currentIndex+3).concat(images.slice(0, currentIndex+3-images.length))
    }

      return(
        <div>
          <h1 className='carousel-title'>{galleryToShow}</h1>
          <div className="carousel-container">
            <button className="carousel-button" onClick={prevImage}>
              <LeftArrow/>
            </button>
            <div className="carousel">
              {imagesToShow.map((image, index) => (
                <div
                key={index}
                className={`carousel-slide active`}
                style={{ backgroundImage: 'url(' + require(`../../assets/gallery-page/${galleryToShow}/${image}.jpg`) + ')' }}
                ></div>
                ))}
            </div>
            <button className="carousel-button" onClick={nextImage}>
              <RightArrow/>
            </button>
          </div>
        </div>
    );
  }
  
  
  export default CarouselImages;