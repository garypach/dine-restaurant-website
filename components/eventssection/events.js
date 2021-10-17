import Image from "next/image";
import Link from 'next/link';
const Events = () => {
    return(
        <div className="events-cont">
            <div className="event-cont">
            <div className="event-img">
            <Image src={`/homepage/family-gathering-mobile.jpg`}  width="326px" height="400px" alt={`family`}/>
            </div>
            <div className="event-txt-cont">
                <div className="events">
                    <div> Family Gathering</div>
                    <div> Special Events </div>
                    <div> Social Events</div>
                </div>
                <div className="event-txt">
                    <h1>Family Gathering</h1>
                    <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                   
                </div>
                <Link href="/book">
                    <a>
                    <div id="event-button"><p>BOOK A TABLE</p></div>
                    </a>
                </Link>
            </div>
            </div>
        </div>
      
    )
}

export default Events;