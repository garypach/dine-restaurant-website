import Image from 'next/image'
import Link from 'next/link'
const HomeHero = () => {
    return(
        <div className="hero-cont">
            <div className="mobile">
            <Image src="/homepage/hero-bg-mobile.jpg" width="375px" height="748px" alt="hero bg"/>
            </div>
            <div className="mobiletwotime">
            <Image src="/homepage/hero-bg-mobile@2x.jpg" width="750px" height="1200px" alt="hero bg"/>
            </div>
            <div className="hero-txt-cont">
                <h2 className="dine">dine</h2>
                <h1 className="heading">Exquisite dining since 1989 </h1>
                <p className="desc">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <Link href="/book">
                    <a>
                    <div className="button-cont"><p>BOOK A TABLE</p></div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default HomeHero