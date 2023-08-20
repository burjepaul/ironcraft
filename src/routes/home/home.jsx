import './home.styles.scss'
import Anvil from '../../assets/nicovala.png'
import Stair from '../../assets/stair.png'
import LogoVideo from '../../assets/LogoVideo.mp4'
import CustomButton from '../../components/customButton/customButton'
import { useRef } from 'react'
import { OpacityPercentage} from '../../config/helper'
import Footer from '../footer/footer.component'

const Home = () => {
    const productInfo = useRef(null)
    const smallProduct = useRef(null)
    const stairs = useRef(null)
    const gates = useRef(null)

    const percenteageToShowproductInfo = OpacityPercentage(productInfo)
    const percenteageToShowsmallProduct = OpacityPercentage(smallProduct)
    const percenteageToShowstairs = OpacityPercentage(stairs)
    const percenteageToShowgates = OpacityPercentage(gates)

    

    return (
        <div className='home-container'>

            <div className='home-hero'>
                <video autoPlay={true} muted={true} loop={true}>
                <source src={LogoVideo} type="video/mp4" />
                </video>
            </div>

            <div className='product-information-container' ref={productInfo} style={{opacity: `${percenteageToShowproductInfo}%`}}>
                <div className='product-description'>
                    <h1>Product Information</h1>
                    <p>&nbsp;&nbsp;&nbsp; Meticulously crafted, each piece is a unique masterpiece, showcasing the timeless beauty of ironwork. From elegantly forged sculptures and intricate candle holders to sturdy yet stylish furniture, our manual-made iron designs bring a touch of sophistication and character to any space. With attention to detail and a passion for craftsmanship, we take pride in delivering exquisite iron creations that will stand the test of time, adding a touch of charm and elegance to your home or office decor. Discover the allure of handcrafted iron design items and embrace the enduring appeal of artisanal craftsmanship.</p>
                    <CustomButton text={'Read more'} color={'var(--color-title)'}  textColor={'var(--color-silver)'} linkTo={'aboutus'}/>
                </div>
                <div className='anvil-image'>
                    <img src={Anvil} alt='anvil'/>
                </div>
            </div>

            <div className='small-products' ref={smallProduct} style={{opacity: `${percenteageToShowsmallProduct}%`}}>
                <div className='first-half'>
                    <div className='upper'></div>
                    <div className='under'></div>
                </div>

                <div className='second-half'>
                </div>
                <p className='small-products-description'>&nbsp;&nbsp;&nbsp;Manually forged iron chandeliers, shelves, wine supports, and other small interior objects represent a captivating blend of craftsmanship and artistry.  <br/>&nbsp;&nbsp;&nbsp;Each item is scrupulous handcrafted, starting with raw iron materials that are heated in a forge until they reach a malleable state. The blacksmith then skillfully hammers, bends, twists, and shapes the iron into intricate designs, incorporating unique patterns and details. This manual process ensures that every piece is distinct and showcases the artisan's personal touch. <CustomButton text={'See Gallery'} color={'var(--color-silver)'} textColor={'var(--color-title)'} linkTo={'gallery'}/></p>
            </div>

            <div className='stairs-container' ref={stairs} style={{opacity: `${percenteageToShowstairs}%`}}>
                <div className='stairs-description'>
                    <p>&nbsp;&nbsp;&nbsp; Manually created interior and exterior stairs that combine iron with wood offer a unique and aesthetically pleasing design for homes and buildings. This type of staircase blends the durability and strength of iron with the natural warmth and beauty of wood, creating a striking visual contrast that complements various interior styles, from traditional to contemporary. <br/>&nbsp;&nbsp;&nbsp; One of the significant advantages of combining iron and wood in staircase construction is the ability to achieve both durability and beauty in a single design. Iron provides the necessary structural support, ensuring the staircase remains safe and sturdy for years to come. Meanwhile, the wooden elements infuse the space with a sense of natural warmth, creating a welcoming and inviting atmosphere.</p>
                    <CustomButton text={'See Gallery'} color={'var(--color-title)'}  textColor={'var(--color-silver)'} linkTo={'gallery'}/>
                </div>
                <div className='stair-image'>
                    <img src={Stair} alt='stair'/>
                </div>
            </div>

            <div className='gates-products' ref={gates} style={{opacity: `${percenteageToShowgates}%`}}>
                <div className='first-half'>
                    <div className='upper'></div>
                    <div className='under'></div>
                </div>

                <div className='second-half'>
                </div>
                <p className='small-products-description'>&nbsp;&nbsp;&nbsp;Gates that artfully combine iron and wood result in a captivating and functional entryway that leaves a lasting impression. The sturdy iron framework forms the backbone of the gate, offering robust support and intricate detailing.<br/>&nbsp;&nbsp;&nbsp;Complementing the iron structure, carefully chosen wood accents infuse the gate with a touch of natural elegance. The wooden elements, such as panels or inserts, soften the overall look and provide a warm, inviting texture that perfectly harmonizes with the surrounding landscape or architectural style. <CustomButton text={'See Gallery'} color={'var(--color-silver)'} textColor={'var(--color-title)'} linkTo={'gallery'}/></p>
            </div>
            <Footer/>
        </div>
    )
}

export default Home