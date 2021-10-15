import Cover from "./coversection/cover"
import HomeHero from "./homeherosection/HomeHero"
import Menu from "./menusection/menu"

const Home = () => {
    return(
        <div>
        <HomeHero/>
        <Cover 
        coverImage={'/homepage/enjoyable-place-mobile.jpg'} 
        coverHeading={
        'Enjoyable place for all the family'
        }
        coverDesc={
            'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.'
        }
        type={''}/>
         <Cover 
        coverImage={'/homepage/locally-sourced-mobile@2x.jpg'} 
        coverHeading={
            'The most locally sourced food'
        }
        coverDesc={
            ' All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food. '
        }
        type={'under'}/>

        <Menu foodImage={'/homepage/salmon-mobile.jpg'} foodName={'Sered Salmon Fillet'} foodDesc={'Our locally sourced slamon served with a refreshing buckwheat summer salad'}/>
        </div>
      
    )
}

export default Home