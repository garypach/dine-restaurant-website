import Image from 'next/image'
const HomeHero = () => {
    return(
        <div className="hero-cont">
            <Image src="/homepage/hero-bg-mobile.jpg" width="375px" height="748px" alt="hero bg"/>
            <div className="hero-txt-cont">
                <h2 className="dine">dine</h2>
                <h1 className="heading">Exquisite dining since 1989 </h1>
                <p className="desc">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <div className="button-cont"><p>BOOK A TABLE</p></div>
            </div>
        </div>
    )
}

export default HomeHero