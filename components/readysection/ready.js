import Image from "next/image";
import Link from 'next/link';
const Ready = () => {
    return(
            <div className="ready-img">
            <div className="mobile">
            <Image src={`/homepage/ready-bg-mobile.jpg`}  width="375px" height="328px" alt={`family`}/>

            </div>
            <div className="mobiletwotimes">
            <Image src={`/homepage/ready-bg-mobile@2x.jpg`}  width="750px" height="272px" alt={`family`}/>
            </div>
            <div className="desktop">
            <Image src={`/homepage/ready-bg-desktop.jpg`}  width="1440px" height="272px" alt={`family`}/>
            </div>
            <div className="desktoptwotime">
            <Image src={`/homepage/ready-bg-desktop@2x.jpg`}  width="1920px" height="272px" alt={`family`}/>
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