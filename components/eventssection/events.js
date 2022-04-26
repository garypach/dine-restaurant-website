import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
const Events = () => {

const eventimages = [
    {id:'1', imageName:'family-gathering-mobile@2x.jpg',imageNameTablet:'family-gathering-tablet@2x.jpg',imageNameDesktop:'family-gathering-desktop@2x.jpg',tag:'family', head:'Family Gathering',text:'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.'},
    {id:'2', imageName:'special-events-mobile@2x.jpg',imageNameTablet:'special-events-tablet@2x.jpg',imageNameDesktop:'special-events-desktop@2x.jpg',tag:'special', head:'Special Events',text:'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.'},
    {id:'3', imageName:'social-events-mobile@2x.jpg',imageNameTablet:'social-events-tablet@2x.jpg',imageNameDesktop:'social-events-desktop@2x.jpg',tag:'social', head:'Social Events',text:'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.'},
]
const[tag,setTag] = useState(0);
    const[selectedImage,setSelectedImage] = useState([]);
    useEffect(()=>{
        tag === 0 ? setSelectedImage(eventimages[0]) : setSelectedImage(eventimages[tag])
    },[tag])
   

    return(
        <div className="event-section">
            <div className="event-cont">
            <div className="event-img mobiletwotime">
            <Image src={`/homepage/${selectedImage.imageName}`}  layout="fill" alt={`${selectedImage.tag}`}/>
            </div>
            <div className="event-img tablet">
            <Image src={`/homepage/${selectedImage.imageNameTablet}`}  layout="fill" alt={`${selectedImage.tag}`}/>
            </div>
            {/* <div className="event-img event-twotime">
            <Image src={`/homepage/${selectedImage.imageNameTwoTime}`}  width="689px" height="400px" alt={`${selectedImage.tag}`}/>
            </div>
            <div className='event-pattern-left'>
            <Image src={`/patterns/pattern-curve-top-right.svg`} width="573px" height="360px" alt="pattern"/>
            </div>
            <div className="event-triple-line">
            <Image src="/patterns/pattern-lines.svg" width="160px" height="76px" alt="Enjoyable place"/>
            </div> */}
            <div className="event-txt-cont">
                <div className="events">
                <TagImage number={0} handleSetTag={setTag} text={'Famliy Gatherings'} tagActive={tag === 0 ? true : false }/>
                <TagImage number={1} handleSetTag={setTag} text={'Special Events'} tagActive={tag === 1? true : false }/>
                <TagImage number={2} handleSetTag={setTag} text={'Social Events'} tagActive={tag === 2? true : false }/>
                </div>
                <div className="event-txt">
                    <h1>{selectedImage.head}</h1>
                    <p>{selectedImage.text}</p>                   
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
const TagImage = ({number,handleSetTag,tagActive,text}) =>{
    return <div className={`tag ${tagActive ? 'active' : null}`} onClick={ () => handleSetTag(number)}><span>{text}</span><div className={`event-line ${tagActive ? 'event-line-active' : null}`}></div></div>
}

export default Events;