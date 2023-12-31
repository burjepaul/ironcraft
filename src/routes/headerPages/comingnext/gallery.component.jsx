import { useState } from 'react'
import './gallery.styles.scss'
import gateImage from '../../../assets/gallery-page/i.jpg'
import gateImage2 from '../../../assets/gallery-page/e.jpg'
import stair from '../../../assets/gallery-page/e1.jpg'
import railing from '../../../assets/gallery-page/a.jpg'
import CarouselImages from '../../../components/carousel/carousel.component'
import Footer from '../../footer/footer.component'

const Gallery = () => {
    const [activeGallery, setActiveGallery] = useState(null)

    return(
        <>
        <div className='container'>
            <div className='gallery-container'>
                <div className='gallery-hero'>
                    <h1>Forged by Fire: Ironcraft Gallery</h1>
                    <div className='iamges-container'>
                        <div style={{backgroundImage: `url(${gateImage})`}} className='images' onClick={() => {setActiveGallery('Saxon Gates')}}>
                            <h2>Saxon Gates</h2>
                        </div>
                        <div style={{backgroundImage: `url(${gateImage2})`}} className='images' onClick={() => {setActiveGallery('Gates')}}>
                            <h2>Gates</h2>
                        </div>
                        <div style={{backgroundImage: `url(${stair})`}} className='images' onClick={() => {setActiveGallery('Stairs')}}>
                            <h2>Stairs</h2>
                        </div>
                        <div style={{backgroundImage: `url(${railing})`}} className='images' onClick={() => {setActiveGallery('Railings')}}>
                            <h2>Railings</h2>
                        </div>
                    </div>
                </div>
                {activeGallery ? <CarouselImages currentPage={'gallery-page'} galleryToShow={activeGallery} numberOfImagesToShow={3} title={activeGallery}/> : <h2 className='pick-gallery-text'>Pick a gallery from above</h2>}
            </div>
        </div>
        <Footer/>
        </>
        
    )
}

export default Gallery