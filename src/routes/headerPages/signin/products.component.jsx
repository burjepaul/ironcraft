import './products.styles.scss'

import {ReactComponent as HammerSvg} from "../../../assets/hammer-svg.svg"
import CarouselImages from '../../../components/carousel/carousel.component'
import { useState } from 'react'
import Footer from '../../footer/footer.component'

const Products = () => {
    const [productToShow, setProductToShow] = useState(null)

    return(
        <>
        <div className='products-container'>
            <div className='products-text'>
                <h2>Our expertise includes:</h2>
                <p className='product-item' onClick={() => setProductToShow("product-1")} style={productToShow === "product-1" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>wrought iron gates</p>
                <p className='product-item' onClick={() => setProductToShow("product-2")} style={productToShow === "product-2" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>interior and exterior wooden or iron stairs on a wrought iron base</p>
                <p className='product-item' onClick={() => setProductToShow("product-3")} style={productToShow === "product-3" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>wrought iron railings</p>
                <p className='product-item' onClick={() => setProductToShow("product-4")} style={productToShow === "product-4" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>exterior covers</p>
                <p className='product-item' onClick={() => setProductToShow("product-5")} style={productToShow === "product-5" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>interior and exterior design items</p>
                <p className='product-item' onClick={() => setProductToShow("product-6")} style={productToShow === "product-6" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>wine bottle supports, candle supports or other items on demand</p>
                <p className='product-item' onClick={() => setProductToShow("product-7")} style={productToShow === "product-7" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>lighting items</p>
                <p className='product-item' onClick={() => setProductToShow("product-8")} style={productToShow === "product-8" ? {textShadow:"0px 0px 22px var(--color-antiqueGold)", scale:"1.3"}: {}}><HammerSvg className='hammer-svg'/>furniture for the inside or the outside, only wrought iron and massive wood, handmade</p>
            </div>
            <div className='products-area'>
                {productToShow ? <CarouselImages currentPage={'product-page'} galleryToShow={productToShow} numberOfImagesToShow={1} className="product-carousel"/> : <></>}
            </div>
            {
                productToShow ? <></> : <h1 className='pick-product-text'>Pick a product from above</h1>
            }
        </div>
        <Footer/>
        </>
    )
}

export default Products