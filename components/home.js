import Cover from "./coversection/cover"
import HomeHero from "./homeherosection/HomeHero"
import Menu from "./menusection/menu"
import Footer from './footer/footer'
import Events from "./eventssection/events"
import Ready from "./readysection/ready"

const Home = () => {
    return(
        <div>
        <HomeHero/>
        <Cover 
        coverImage={'/homepage/enjoyable-place-mobile.jpg'} 
        coverImageTwoTimes={'/homepage/enjoyable-place-mobile@2x.jpg'} 

        coverHeading={
        'Enjoyable place for all the family'
        }
        coverDesc={
            'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.'
        }
        coverImageTwo={'/homepage/locally-sourced-mobile@2x.jpg'} 
        coverHeadingTwo={'The most locally sourced food'}
        coverDescTwo={' All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food. '}
        />

        <Menu 
        foodImageOne={'/homepage/salmon-mobile.jpg'}
         foodNameOne={'Sered Salmon Fillet'} 
         foodDescOne={'Our locally sourced slamon served with a refreshing buckwheat summer salad'}
         foodImageTwo={'/homepage/beef-mobile.jpg'}
         foodNameTwo={'Rosemary Filet Mignon'} 
         foodDescTwo={'Our prime beef served to your taste with a delicious choice of seasonal sides.'}
         foodImageThree={'/homepage/chocolate-mobile.jpg'}
         foodNameThree={'Summer Fruit Chocolate Mousse'} 
         foodDescThree={'Creamy mousse combined with summer fruits and dark chocolate shavings.'}
         />
         <Events/>
         <Ready/>
         <Footer type={'foot-home'}/>
        </div>
      
    )
}

export default Home