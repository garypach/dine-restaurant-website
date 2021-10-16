import Head from 'next/head'
import Image from 'next/image'
import Reserve from '../components/reserve/reserve'
import { EMProvider } from '../components/EMProvider/EmailProvider'
import BookHero from '../components/bookhero/bookhero'
import Footer from '../components/footer/footer'
export default function Book() {
  return (
    <EMProvider>
        <BookHero/>
        <Reserve/>
        <Footer/>
    </EMProvider>
 
  )
}
