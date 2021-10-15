import Image from "next/image";
import Link from 'next/link';
const BookHero = () => {
    return(
        <div className="book-hero-cont">
            <Image src="/booking/hero-bg-mobile.jpg" width="375px" height="600px" alt="booking"></Image>
            <div className="book-txt-cont">
                <h2>dine</h2>
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