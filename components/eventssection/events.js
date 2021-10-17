import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
const Events = () => {

const eventimages = [
    {id:'1', imageName:'family-gathering-mobile.jpg',tag:'family', head:'Family Gathering',text:'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.'},
    {id:'2', imageName:'special-events-mobile.jpg',tag:'special', head:'Special Events',text:'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.'},
    {id:'3', imageName:'social-events-mobile.jpg',tag:'social', head:'Social Events',text:'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.'},
]
const[tag,setTag] = useState(0);
    const[selectedImage,setSelectedImage] = useState([]);
    useEffect(()=>{
        tag === 0 ? setSelectedImage(eventimages[0]) : setSelectedImage(eventimages[tag])
    },[tag])
   

    return(
        <div className="events-cont">
            <div className="event-cont">
            <div className="event-img">
            <Image src={`/homepage/${selectedImage.imageName}`}  width="326px" height="400px" alt={`${selectedImage.tag}`}/>
            </div>
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