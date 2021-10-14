import Image from 'next/image'
const Cover = (props) => {
    return(
        <div className={`cover-cont ${props.type}`}>
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
    )
}

export default Cover