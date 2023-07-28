import './customButtons.styles.scss'

const CustomButton = ({text, color, textColor, linkTo}) => {
    return(
        <div className='button-container' style={{backgroundColor: `${color}`}}>
            <a href={linkTo}>
                <p style={{color:`${textColor}`}}>{text}</p>
            </a>   
        </div>
    )
}

export default CustomButton