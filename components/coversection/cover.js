import Image from 'next/image'
const Cover = (props) => {
    return(
        <div className="cover-section-cont">
  <div className={`cover-cont`}>
            <div className="cover-img">
            <Image src={props.coverImage} width="327px" height="400px" alt="Enjoyable place"/>
            </div>
            <div className="cover-line">
            <Image src="/patterns/pattern-divide.svg" width="71px" height="7px" alt="Enjoyable place"/>
            </div>
            <div className="cover-txt-cont">
                <h2 className="cover-heading"> {props.coverHeading}</h2>
                <div className="cover-desc">
                <p>{props.coverDesc}</p>
                </div>
            </div>
        </div>
        <div className={`cover-cont-under`}>
            <div className="cover-img">
            <Image src={props.coverImageTwo} width="327px" height="400px" alt="Enjoyable place"/>
            </div>
            <div className="cover-line">
            <Image src="/patterns/pattern-divide.svg" width="71px" height="7px" alt="Enjoyable place"/>
            </div>
            <div className="cover-txt-cont">
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