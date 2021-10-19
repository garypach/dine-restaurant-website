import Image from "next/image";
import Link from 'next/link';
const BookHero = () => {
    return(
        <div className="book-hero-cont">
            <div className="mobile">
            <Image src="/booking/hero-bg-mobile.jpg" width="375px" height="600px" alt="booking"></Image>
            </div>
            <div className="mobiletwotimes">
            <Image src="/booking/hero-bg-mobile@2x.jpg" width="750px" height="1000px" alt="booking"></Image>
            </div>
            <div className="desktoptwotimes">
            <Image src="/booking/hero-bg-desktop@2x.jpg" width="1920px" height="600px" alt="booking"></Image>
            </div>
            <div className="book-txt-cont">
                <h2 className="dine-book">dine</h2>
                <h1>Reservations</h1>
                <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                <Link href="#">
                    <a>
                    <div className="reserve-btn"><p>RESERVE PLACE</p></div>
                    </a>
                </Link>
            </div>
        </div>
      
    )
}

export default BookHero;