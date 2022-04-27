import Image from 'next/image'
const Cover = (props) => {
    return(
        <div className="cover-section-cont">
  <div className={`cover-cont`}>
    
            <div className="mobiletwotime cover-img">
            <Image src={props.coverImageTwoTimes} layout="fill" alt="Enjoyable place"/>
            </div>
            <div className="tablet cover-img">
            <Image src={props.coverImageTablet} layout="fill" alt="Enjoyable place"/>
            </div>
            <div className="desktop cover-img">
            <Image src={props.coverImageDesktop} layout="fill" alt="Enjoyable place"/>
            </div>
            {/* 
            <div className='cover-pattern-left'>
            <Image src={`/patterns/pattern-curve-bottom-right.svg`} width="573px" height="360px" alt="pattern"/>
            </div>
            <div className='cover-pattern-desktop'>
            <Image src={`/patterns/pattern-curve-top-right.svg`} width="895px" height="320px" alt="pattern"/>
            </div> */}
            <div className="cover-txt-cont">
            <div className="cover-line cover-line-under">
            <Image src="/patterns/pattern-divide.svg" layout="fill"  alt="Enjoyable place"/>
            </div>
                <h2 className="cover-heading"> {props.coverHeading}</h2>
                <div className="cover-desc">
                <p>{props.coverDesc}</p>
                </div>
            </div>
        </div>
        <div className={`cover-cont-under`}>
    
            <div className="mobiletwotime cover-img">
            <Image src={props.coverImageTwo} layout="fill" alt="Enjoyable place"/>
            </div>
            <div className="tablet cover-img">
            <Image src={props.coverImageTwoTablet} layout="fill" alt="Enjoyable place"/>
            </div>
            <div className="desktop cover-img">
            <Image src={props.coverImageTwoDesktop} layout="fill" alt="Enjoyable place"/>
            </div>
            {/* 
            <div className="cover-triple-line">
            <Image src="/patterns/pattern-lines.svg" width="160px" height="76px" alt="Enjoyable place"/>
            </div>
           
            <div className='cover-pattern-right'>
            <Image src={`/patterns/pattern-curve-top-left.svg`} width="380px" height="326px" alt="pattern"/>
            </div> */}
            <div className="cover-txt-cont">
            <div className="cover-line cover-line-under">
            <Image src="/patterns/pattern-divide.svg" layout="fill"  alt="Enjoyable place"/>
            </div>
                <h2 className="cover-heading"> {props.coverHeadingTwo}</h2>
                <div className="cover-desc">
                <p>{props.coverDescTwo}</p>
                </div>
            </div>
        </div>
        
        </div>
      
    )
}

export default Cover