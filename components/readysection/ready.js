import Image from "next/image";
import Link from 'next/link';
const Ready = () => {
    return(
            <div className="ready-img">
            <Image src={`/homepage/ready-bg-mobile.jpg`}  width="375px" height="328px" alt={`family`}/>
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