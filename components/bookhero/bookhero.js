import Image from "next/image";
import Link from 'next/link';
const BookHero = () => {
    return(
        <div className="book-hero-cont">
            <div className="book-img mobiletwotime">
            <Image src="/booking/hero-bg-mobile@2x.jpg" layout="fill" alt="booking"/>
            </div>
            <div className=" book-img tablet">
            <Image src="/booking/hero-bg-tablet@2x.jpg" layout="fill" alt="booking"/>
            </div>
            <div className=" book-img desktop">
            <Image src="/booking/hero-bg-desktop@2x.jpg" layout="fill" alt="booking"/>
            </div>
            <div className="book-txt-cont">
                <Link href="/">
                <a>
                <h2 className="dine-book">dine</h2>
                </a>
                </Link>
                
                <h1>Reservations</h1>
                <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
            </div>
        </div>
      
    )
}

export default BookHero;