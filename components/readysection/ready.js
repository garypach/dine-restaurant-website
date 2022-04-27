import Image from "next/image";
import Link from 'next/link';
const Ready = () => {
    return(
            <div className="ready-cont">
        
            <div className="ready-img mobiletwotime">
            <Image src={`/homepage/ready-bg-mobile@2x.jpg`}  layout="fill" alt={`family`}/>
            </div>
            <div className="ready-img tablet">
            <Image src={`/homepage/ready-bg-tablet@2x.jpg`}  layout="fill" alt={`family`}/>
            </div>
            <div className="ready-img desktop">
            <Image src={`/homepage/ready-bg-desktop@2x.jpg`}  layout="fill" alt={`family`}/>
            </div>
            <div className="ready-txt-cont">
                <div className="ready-txt">
                    <h1>Ready to make a reservation?</h1>                   
                </div>
                <Link href="/book">
                    <a>
                    <div id="ready-button"><p>BOOK A TABLE</p></div>
                    </a>
                </Link>
            </div>
            </div>
      
    )
}

export default Ready;