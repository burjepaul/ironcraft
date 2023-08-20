import Footer from '../../footer/footer.component'
import './aboutus.styles.scss'

const Aboutus = () => {
    return (
        <>
        <div className='aboutus-container'>
            <div className='about-us-hero'>
                <h1>About Us</h1>
                <div className='text-container'>
                        <p>Founded years ago,Ironcraft embarked on a journey with a simple yet ambitious vision: to bring artistry and functionality together through the medium of iron. What began as a modest endeavor has evolved into a flourishing venture that now seamlessly marries iron with wood to create exquisite and distinctive pieces.</p>
                        <p>In our early days, we started by crafting basic iron products, dedicating ourselves to mastering the art of forging, shaping, and molding this robust material. With unwavering passion and a commitment to quality, we gradually built a reputation for our craftsmanship and attention to detail.</p>
                </div>
            </div>
            <div className='text-container'>
                <p>As  we honed our skills and gained a loyal customer base, we began exploring the fusion of iron with wood elements. This innovative approach allowed us to infuse warmth and texture into our creations, resulting in a harmonious blend of industrial strength and natural elegance. Each piece we craft now tells a unique story, capturing the essence of our journey from the raw beginnings of ironwork to the refined collaboration of iron and wood.</p>
                <p>Today, we stand as a testament to creativity, dedication, and the power of evolution. Our portfolio showcases a diverse range of iron and wood creations, from functional furniture to ornamental decor, each reflecting the intricate balance between industrial durability and the organic beauty of wood. With every piece we produce, we continue to celebrate the fusion of these two materials and the growth of our ironcraft startup into a source of inspiration for those who appreciate the timeless allure of craftsmanship.</p>
            </div>
       </div>
       <Footer/>
        </>
    )
}

export default Aboutus