import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LargeCard from '../components/LargeCard'
import HotProducts from '../components/Cards/HotProducts'
import Categories from '../components/Cards/Categories'
import ShoeProducts from '../components/Cards/ShoeProducts'
import BestOfAdidas from '../components/Cards/BestOfAdidas'
import { useState } from 'react'
import Bottom from '../components/Bottom'
import HotProductsCarousel from '../components/Carousels/HotProductsCarousel'
import BestOfAdidasCarousel from '@/components/Carousels/BestOfAdidasCarousel'
import NavbarMobile from '../components/NavbarMobile'
import Sidebar from '../components/Sidebar'
import { description, categories, shoeProductsData, hotproductsData, bestofadidasData } from '../public/data'
import ChatSupport from '../components/ChatSupport'



export default function Home() {

  const [isShow, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
      <main className='bg-white'>
        <Head>
        <title>Adidas</title>
        <link rel="icon" href="/adidas.png"></link>
        </Head>
        <Navbar />
        <NavbarMobile isShow={isShow} setShow={setShow} />
        <Sidebar isShow={isShow} setShow={setShow} />

        <ChatSupport />

        <div className='h-10'></div>
        
        <LargeCard bg="first-bg.webp" title="HOME OF CLASSICS" desc="Three classics, timeless for a reason" url="" />
        <div className='h-2 w-full'></div>
        <LargeCard bg="second-bg.webp" desc="Get Raya-Ready with new outfits!" url="" />
        
        <section className=' px-6 md:px-12 xl:px-28 pb-12 pt-6 '>
          <h1 className=' font-bold text-black text-3xl mb-3'>WHATS HOT</h1>
          <HotProductsCarousel prop={hotproductsData} />
        </section>

        <section className=' px-6 flex flex-col md:flex-row '>
          {categories.map((data, index) => (
            <Categories key={index} img={data.img} text={data.text} />
          ))}
        </section>

        <section className=' px-6 flex flex-row flex-wrap '>
          {shoeProductsData.map((data, index) => (
            <div key={index} className=' w-full md:w-1/2 lg:w-1/4 py-2 md:p-2'>
              <ShoeProducts img={data.img} text={data.text} />
            </div>
          ))}
        </section>

        <section className=' py-8 p-2 md:p-16 xl:px-60 '>
          <h1 className=' text-center text-3xl font-bold text-black mb-4 '>BEST OF ADIDAS</h1>
          <BestOfAdidasCarousel prop={bestofadidasData} />
        </section>

        <section className=' bg-gray-200 '>
          <div className='flex flex-col lg:flex-row p-10 lg:px-32'>
            {description.map((data, index) => (
              <div key={index} className='text-black p-4 w-full lg:w-1/2'>
                <h1 className=' font-semibold mb-3 '>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-white flex justify-center lg:hidden text-black'>
          <button onClick={scrollToTop} className=' p-2 flex flex-row '>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            </span>
            BACK TO TOP</button>
        </section>
    
        <section className='bg-black'>

          <div className=' flex flex-row lg:hidden '>
            <div className=' w-1/2 p-3 justify-center flex '>
              <button className=' flex flex-row '><span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              </span>
              LOG IN</button>
            </div>
            <div className=' w-1/2 p-3 justify-center flex '>
              <button className=' flex flex-row hover:underline '>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              </span>
              YOUR BAG(0)</button>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col justify-around align-middle p-3 lg:p-8 px-12 lg:px-60'>
            <div className=' font-bold flex-wrap lg:flex-col text-3xl lg:w-1/2 w-full mb-2 lg:mb-0 '>
              <h1>REGISTER YOUR EMAIL FOR</h1>
              <h1>NEWS AND SPECIAL OFFERS</h1>
            </div>
            <div className='lg:w-1/2 w-full justify-center flex'>
              <div class="flex flex-row w-full lg:w-72">
                <input type="search" class="bg-white text-black border-0 p-3 h-12 w-full lg:w-80 m-0 lg:m-auto" placeholder="Your Email Address *" />
                <button className='h-12 pl-3 m-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className='lg:hidden pb-4'>
            <div className=' flex flex-row '>
              <button className='w-1/2 p-3 hover:underline text-xs'>Contact Online Shop</button>
              <button className='w-1/2 p-3 hover:underline text-xs'>Delivery</button>
            </div>
            <div className=' flex flex-row '>
              <button className='w-1/2 p-3 hover:underline text-xs'>FAQ</button>
              <button className='w-1/2 p-3 hover:underline text-xs'>Order Status</button>
            </div>
          </div>
        </section>

        <section className='p-8 px-48 xl:px-60 hidden lg:block'>
          <Bottom />
        </section>
        <Footer />
      </main>
  )
}
