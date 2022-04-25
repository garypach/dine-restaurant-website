import Image from 'next/image'
const Menu = (props) => {
    return(
        <div className={`menu-section-cont`}>
            <div className={'menu-cont'}>
            <div className="menu-txt-cont">
            <div className="food-line">
            <Image src="/patterns/pattern-divide.svg" width="71px" height="7px" alt="line"/>
            </div>
                <h2 className="food-heading"> A few highlights from  our menu</h2>
                <div className="food-heading-desc">
                <p>
                    We cater for all dietary requirements, but here is a glimpse at some of our diners favourites. Our menu is revamped every season.
                </p>
                </div>
            </div>
            <div className="menu-items">
                <div className="menu-item">
                <div className="food-img">
            <Image src={props.foodImageOne} layout="fill" alt="salmon"/>
            </div>
            <div className="food-txt-cont">
                <h2 className="food-name"> {props.foodNameOne}</h2>
                <div className="food-desc">
                <p>{props.foodDescOne}</p>
                </div>
            </div>
                </div>
                <div className="menu-item">
                <div className="food-img">
            <Image src={props.foodImageTwo} width="327px" layout="fill" alt="salmon"/>
            </div>
            <div className="food-txt-cont">
                <h2 className="food-name"> {props.foodNameTwo}</h2>
                <div className="food-desc">
                <p>{props.foodDescTwo}</p>
                </div>
            </div>
                </div>
                <div className="menu-item">
                <div className="food-img">
            <Image src={props.foodImageThree} layout="fill" alt="salmon"/>
            </div>
            <div className="food-txt-cont">
                <h2 className="food-name"> {props.foodNameThree}</h2>
                <div className="food-desc">
                <p>{props.foodDescThree}</p>
                </div>
            </div>
                </div>
        
        
            </div>
           
            </div>
          
        </div>
    )
}

export default Menu