import Image from 'next/image'
import Link from 'next/link'
const Footer = (props) => {
    return(
        <div className={`footer-cont ${props.type}`}>
            <div className="dine-foot"> <h2 className="dine-book-foot">dine</h2></div>
            <div className="footer-text-cont">
                <div>
                <p>Marthwaite, Sedbergh Cumbria</p>
                <p>+00 44 123 4567 </p>
                </div>
                <div className='open-time'>
                <p>Open Times</p>
                <p> Mon - Fri: 09:00 AM - 10:00 PM </p>
                <p>Sat - Sun: 09:00 AM - 11:30 PM </p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer