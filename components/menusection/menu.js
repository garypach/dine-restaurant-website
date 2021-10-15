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
                    we cater for all dietary requirements, but here is a glimpse at some of our diners favourites. Our menu is revamped every season.
                </p>
                </div>
            </div>
            <div className="menu-item">
            <div className="food-img">
            <Image src={props.foodImage} width="327px" height="400px" alt="salmon"/>
            </div>
            <div className="food-txt-cont">
                <h2 className="food-name"> {props.foodName}</h2>
                <div className="food-desc">
                <p>{props.foodDesc}</p>
                </div>
            </div>
            </div>
           
            </div>
          
        </div>
    )
}

export default Menu