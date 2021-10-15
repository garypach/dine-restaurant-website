import Head from 'next/head'
import Image from 'next/image'
import BookHome from '../components/bookhome'
import Reserve from '../components/reserve/reserve'
import { EMProvider } from '../components/EMProvider/EmailProvider'
export default function Book() {
  return (
    <EMProvider>
   <div>
        <BookHome/>
        <Reserve/>
    </div>
    </EMProvider>
 
  )
}
