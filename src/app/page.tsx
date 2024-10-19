import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link"

function page() {
  return (

    <main className="lg:pt-24 pt-24  ">

      <div className="bg-[url('https://mr-tevor.myshopify.com/cdn/shop/files/tevor-slider-hotspot_1512x.png?v=1640149541')] lg:w-full lg:h-[100vh] w-full h-[100px] bg-cover object-cover flex flex-col justify-start lg:justify-between ">


        <div className="text-red-600 md:text-white lg:text-white lg:max-w-[50vw] mx-auto lg:mr-28 lg:pt-48 mt-32 lg:mt-0">
          <h4 className="pt-5 mb-4 lg:text-5xl text-2xl lg:pl-4 ">HIGH <span className="animate-colorChange">QUALITY TAILORING </span>AT YOUR FINGERTIPS.</h4>
          <p className=" mb-4 lg:pl-16 pl-5 text-base ">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do <br className="pt-1" /> eiusmod tempor incididunt ut labore et dolore magna aliqua uis <br className="pt-1" /> ipsum suspendisse ultrices.</p>
          <button className="bg-[#ab1e23] hover:bg-[#ddd5b7] hover:text-gray-900 duration-300  text-white lg:px-[10px] sm:max-w-sm  p-[12px_8px] font-[16px] border-s-amber-50 lg:ml-28 lg:mt-16 ml-5 ">READ MORE</button>
        </div>


      </div>

      <section className="lg:max-w-full lg:max-h-screen bg-[url('https://mr-tevor.myshopify.com/cdn/shop/files/lines-bg_f0aae086-45d5-49e6-b0c9-0fb825e7d97a.png?v=1640086019')] lg:mt-10 md:mt-10 mt-10 ">

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:mb-28 mt-[450px] md:mt-[50px] lg:mt-14 lg:p-5">
          <div className="lg:p-10 pl-5 lg:pl-0">
            <h6 className="">Wellcome</h6>
            <h4 className="text-red-700 text-xl lg:text-6xl pt-4">Our Special Suit Look</h4>
            <p className=" pt-3">Varius sit amet mattis vulputnse telus ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
          </div>
          <div className="w-72 h-72 lg:w-auto lg:h-auto pt-6 lg:pt-0 ">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/about_1.jpg?v=1637909472"} width={357} height={500} alt="shirt"></Image>
          </div>
          <div className="w-72 h-72  lg:w-auto lg:h-auto pt-28 lg:pt-0 ">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/about_3.jpg?v=1637909472 "} width={357} height={400} alt="shirt"></Image>
          </div>
          <div className="w-72 h-72  lg:w-auto lg:h-auto lg:col-start-2  lg:absolute lg:mt-80 lg:ml-48  pt-28 lg:pt-0">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/news_letter.jpg?v=1638186268"} width={357} height={500} alt="shirt"></Image>
          </div>
          <div className="lg:col-start-3 w-auto h-auto pt-16 lg:pt-0  lg:w-auto lg:h-auto relative lg:mt-32">
            <h4 className="text-red-700 lg:text-6xl text-xl sm:text-4xl lg:bottom-0 lg:px-2 lg:absolute">TRENDY LOOK WITH LAPEL</h4>
            <p className="lg:top-0 lg:absolute">Pulvinar neque laoreet suspe consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et phlore</p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 lg:mb-28 sm:mb-28 mt-10 ">
          <div className="w-auto h-full relative flex justify-center items-center  bg-[#1c1c1c] hover:bg-[#363229] scale-y-100 duration-150 ">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/icons_01_180x.png?v=1641465090"} width={80} height={80} alt="Flower"></Image>
          </div>

          <div className="bg-[#272321] w-auto h-96 relative flex  flex-col justify-center items-center">
            <h4 className="text-[#ddd5b7] mb-5 text-4xl  " >Made with Care</h4>
            <p className="text-[#a9a29f] p-8">Commodo ulper a lacus vestibulum sed arcu non odio est mada fames ac</p>
          </div>

          <div className="w-auto h-full relative flex justify-center items-center  bg-[#1c1c1c] hover:bg-[#363229]">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/icons_02_180x.png?v=1641465090"} width={80} height={80} alt="Flower"></Image>
          </div>

          <div className="bg-[#272321] w-auto h-96 relative flex  flex-col justify-center items-center">
            <h4 className="text-[#ddd5b7] mb-5 text-4xl " >Save money</h4>
            <p className="text-[#a9a29f] p-8" >Aliquam malesuada bibendum arcu vitae elementum curabitur</p>
          </div>

          <div className="bg-[#272321] w-auto h-96 relative flex  flex-col justify-center items-center">
            <h4 className="text-[#ddd5b7] mb-5 text-4xl ">Excellence fabrics</h4>
            <p className="text-[#a9a29f] p-8">Bibendum arcu vitae elementum curtur vitae nunc purus gravida qui</p>
          </div>

          <div className="w-auto h-full relative flex justify-center items-center hover:bg-[#363229] bg-[#1c1c1c]">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/icons_03_180x.png?v=1641465090"} width={80} height={80} alt="Flower"></Image>

          </div>

          <div className="bg-[#272321] w-auto h-96 relative flex  flex-col justify-center items-center">
            <h4 className="text-[#ddd5b7] mb-5 text-4xl ">Perfection cut</h4>
            <p className="text-[#a9a29f] p-8">Viverra nibh cras pulvinar mattis. Dignissim convallis aenean et tortes</p>
          </div>

          <div className="w-auto h-full relative flex justify-center items-center hover:bg-[#363229]  bg-[#1c1c1c]">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/icons_04_180x.png?v=1641465090"} width={80} height={80} alt="Flower"></Image>
          </div>
        </div>

      </section>


      <section className="w-full p-10">

        <div className="lg:text-center  lg:mb-10 mb-5">
          <h6 className="text-xl mb-5">OUR SHOP</h6>
          <h3 className="text-red-800 lg:text-6xl text-2xl font-bold font-['Open_Sans']">TRENDING PRODUCTS</h3>
        </div>


        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-8 opacity-[1]">

          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14 mb-20'>
            <Image
              src={"https://mr-tevor.myshopify.com/cdn/shop/products/shop-10_600x.png?v=1641536777"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-[18.5rem] gap-5 absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-[35px] lg:w-[35px] max-w-5 flex items-center justify-center bg-white hover:bg-red-700 ">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Slim Fit Suit</h3>
              <b>₹. 10,000.00</b>
            </div>

          </div>


          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14  mb-20'>
            <Image
              src={" https://mr-tevor.myshopify.com/cdn/shop/products/shop-9_600x.png?v=1641536729%22"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-80 lg:mt-[18.5rem] gap-5 absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Single Breasted Suit</h3>
              <b>₹. 13,000.00</b>
            </div>
          </div>



          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14  mb-20'>
            <Image
              src={"https://mr-tevor.myshopify.com/cdn/shop/products/shop-8_600x.png?v=1641536669%22"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-[18.5rem]  gap-5 absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Shawl Lapel Suit</h3>
              <b>₹. 15,000.00</b>
            </div>
          </div>



          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14 mb-20'>
            <Image
              src={"https://mr-tevor.myshopify.com/cdn/shop/products/shop-7_600x.png?v=1641536669%22"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-[18.5rem] gap-5 absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Peak Lapel Suit</h3>
              <b>₹. 11,000.00</b>
            </div>
          </div>

          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14 mb-20'>
            <Image
              src={"https://mr-tevor.myshopify.com/cdn/shop/products/shop-6_600x.png?v=1641536669%22"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-[18.5rem] gap-5 absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Notch Lapel Suit</h3>
              <b>₹. 13,000.00</b>
            </div>
          </div>


          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14 mb-20'>
            <Image
              src={"https://mr-tevor.myshopify.com/cdn/shop/products/shop-5_600x.png?v=1641536669%22"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-[18.5rem] gap-5 absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Modern Fit Suit</h3>
              <b>₹. 12,000.00</b>
            </div>
          </div>


          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14 mb-20'>
            <Image
              src={"https://mr-tevor.myshopify.com/cdn/shop/products/shop-2_600x.png?v=1641536669%22"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-[18.5rem] gap-5 absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Double Vent Suit</h3>
              <b>₹. 11,000.00</b>
            </div>
          </div>

          <div className='h-auto opacity-[1] w-[100%] relative group lg:mt-0 mt-14 '>
            <Image
              src={"https://mr-tevor.myshopify.com/cdn/shop/products/shop-3_600x.png?v=1641536669%22"}
              width={500}
              height={500}
              alt="Shirt"
              className="transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-[#ffc1c34d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>

            <div className="flex justify-center items-center mt-[18.5rem]  gap-5 absolute top-10 lg:top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 60 60">
                  <path fill="red" className="hover:fill-white" d="M49.3,19c0-1.4-0.5-2.7-1.4-3.7c-1-1-2.3-1.6-3.7-1.6h-2.9c-0.2-3.9-2.4-7.3-5.8-9.2c-3.4-1.9-7.5-1.9-10.9,0
          c-3.4,1.9-5.6,5.3-5.8,9.2h-3c-1.4,0-2.7,0.6-3.6,1.6c-1,1-1.5,2.3-1.5,3.7L9,49.4c-0.1,1.6,0.5,3.1,1.6,4.3
          c1.1,1.2,2.6,1.8,4.2,1.8h30.4c1.6,0,3.1-0.7,4.2-1.8c1.1-1.2,1.7-2.7,1.6-4.3L49.3,19z M22.6,13.6c0-2.7,1.4-5.1,3.7-6.4
          c2.3-1.3,5.1-1.3,7.4,0c2.3,1.3,3.7,3.8,3.7,6.4H22.6z M46.6,51.1c-0.4,0.4-0.9,0.6-1.4,0.6H14.8c-0.5,0-1-0.2-1.4-0.6
          c-0.4-0.4-0.6-0.9-0.5-1.4L14.6,19h0c-0.1-0.8,0.5-1.4,1.2-1.5h28.4c0.7,0,1.2,0.7,1.2,1.6l1.7,30.5h0
          C47.2,50.2,47,50.7,46.6,51.1z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg fill="none" stroke="red" strokeWidth={5} height={20} width={20} viewBox="0 0 100 100">
                  <path d="M38.8,70.9c-2.7,0-4.8,2.2-4.8,4.8v6.2c0,7.1,6.6,13,14.5,13h33.7C89.6,95,95,88.7,95,80V49.5
          c0-9.1-4.7-15.5-11.4-15.5h-7.9c-2.7,0-4.8,2.2-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8l6.4,0c0.5,0.2,3.3-0.3,3.3,5.9v31.6
          c0,0.2,0,4.2-3.2,4.2H48.4c-2.8,0-4.8-2-4.8-3.4v-6.2C43.6,73,41.4,70.9,38.8,70.9z"></path>
                  <g>
                    <path fill="red" d="M48.4,14.7H19.5c-2.7,0-4.8,2.2-4.8,4.8v28.9c0,2.7,2.2,4.8,4.8,4.8h28.9c2.7,0,4.8-2.2,4.8-4.8V19.5
            C53.2,16.8,51.1,14.7,48.4,14.7z"></path>
                    <path d="M54.8,5H16.3C11,5,5,8.8,5,14.1v38.5C5,58,11,62.8,16.3,62.8h38.5c5.3,0,8-4.9,8-10.2V14.1
            C62.8,8.8,60.1,5,54.8,5z M53.2,48.4c0,2.7-2.2,4.8-4.8,4.8H19.5c-2.7,0-4.8-2.2-4.8-4.8V19.5c0-2.7,2.2-4.8,4.8-4.8h28.9
            c2.7,0,4.8,2.2,4.8,4.8V48.4z"></path>
                  </g>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} d="M87.9,15.9c-10.6-10.6-27.5-10.6-38.1,0c-10.6-10.6-27.5-10.6-38.1,0S1.1,43.4,11.7,54l38.1,38.1L87.9,54
          C99,43.4,99,26.4,87.9,15.9z M81.1,30.9c-2.6,2.6-7.4,2.6-10.1,0c-2.6-2.6-2.6-7.4,0-10.1c2.6-2.6,7.4-2.6,10.1,0
          S83.7,28.3,81.1,30.9z"></path>
                </svg>
              </div>

              <div className="h-[35px] w-[35px] flex items-center justify-center bg-white hover:bg-red-700">
                <svg height={20} width={20} viewBox="0 0 100 100">
                  <path fill="none" stroke="red" strokeWidth={7} textAnchor="red" d="M76.4,69.4c13.9-17.8,10.8-43.5-7-57.4C51.6-1.9,25.9,1.2,12,19C-1.9,36.8,1.2,62.5,19,76.4C33.8,88,54.6,88,69.4,76.4
          l18.8,18.8c1.9,1.9,5.1,2,7,0c1.9-1.9,2-5.1,0-7c0,0,0,0,0,0L76.4,69.4z M44.3,75.1"></path>
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl mt-5 text-orange-950 font-semibold">
              <h3>Double Breasted Suit</h3>
              <b>₹. 15,000.00</b>
            </div>
          </div>


        </div>

      </section>



      <section className="mt-10 mb-10">
        <div className="w-full">
          <div className="relative">
            <Image
              className="h-96 w-full object-cover"
              src="https://mr-tevor.myshopify.com/cdn/shop/files/video_bg.jpg?v=1637929701"
              width={1500}
              height={500}
              alt="video"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="z-10 w-[80px] h-[80px] bg-red-700 rounded-full flex items-center justify-center outline-none animate-waveAlarm border-2 border-solid border-red-700">
                <Link
                  className=" w-[15px] h-[15px] block"
                  href={"#"}
                >

                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-[15px]"  // Icon size chhota kiya
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full h-auto">

        <div className="text-center mt-5 ">
          <p className="">Latest News</p>
          <h3 className="text-red-800 lg:text-6xl sm:text-6xl text-2xl lg:mb-10 sm:mb-10 mb-5">Our New Insights</h3>
        </div>



        <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:p-20 sm:p-10 p-5 mx-auto gap-7  ">
          {/* left side  */}
          <div>
            <div>
              <Image src={"https://mr-tevor.myshopify.com/cdn/shop/articles/blog_001_770x.jpg?v=1640684756"} width={800} height={1000} alt="fasion"></Image>
            </div>

            <div className="">
              <p className="text-xs mt-5">December 28, 2021 by Ram M</p>
              <h4 className="lg:text-4xl sm:text-3xl text-2xl text-red-800 mt-5">
                The eminence of men suits that you will surely love your tailoring...
              </h4>
              <button className="text-red-800 mt-10">Read More {">"}</button>
            </div>
          </div>


          {/* right side */}
          <figure>


            <div className="lg:flex lg:justify-center lg:items-center  mb-4 gap-10">
              <div>
                <Image src={"https://mr-tevor.myshopify.com/cdn/shop/articles/blog_002_c0ee775f-cc94-4c46-ba04-fbb0f33993aa_360x.jpg?v=1640684597"} width={500} height={300} alt="design"></Image>
              </div>

              <div className="mt-5 lg:mt-1">
                <p className="text-sm">December 28, 2021,By Ram </p>
                <h3 className="lg:text-4xl text-2xl font-serif font-semibold text-blue-950 mt-2">New sophisticated suits for handsome men with new trend</h3>
              </div>
            </div>

            <hr />

            <div className="lg:flex justify-center items-center mb-4 mt-2 gap-10 p-2">

              <div>
                <Image src={"https://mr-tevor.myshopify.com/cdn/shop/articles/blog_003_360x.jpg?v=1640684395"} width={500} height={300} alt="design"></Image>
              </div>


              <div className="mt-5 lg:mt-1">
                <p className="text-xs">December 28, 2021, By Ram M</p>
                <h3 className="lg:text-4xl text-2xl font-serif font-semibold text-blue-950 mt-2">Nothing can beat the quality of men suits we provide for your life</h3>

              </div>
            </div>

            <hr />

            <div className="lg:flex lg:justify-center lg:items-center mb-32 lg:mb-5 mt-2 gap-10">
              <div>
                <Image src={"https://mr-tevor.myshopify.com/cdn/shop/articles/blog_004_360x.jpg?v=1640684420"} width={500} height={300} alt="design"></Image>
              </div>


              <div className="mt-5">
                <p className="text-xs">December 28, 2021, By Ram M</p>
                <h3 className="lg:text-4xl text-2xl mt-5 lg:mt-1 font-serif font-semibold ">Leave an impression in the party with the best suit outlook ever</h3>
              </div>


            </div>


          </figure>

        </div>

      </section>


      <section className="w-full h-auto">

        <div className="bg-gray-900">

          {/* Image */}
          <div className="lg:w-full">
            <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/news_bg_i_1512x.jpg?v=1638192240"} width={1500} height={1500} alt="stle">
            </Image>
          </div>



          {/* full width */}
          <div className="lg:w-full lg:h-full">

            {/* max-w-div */}
            <div className="lg:max-w-6xl  lg:mx-auto bg-slate-100  relative z-[2] top-[-200px] p-4">

              <div className="lg:p-20 p-5 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1  border-[1px] border-gray-400 gap-10 ">

                {/* left side */}
                <div className="">
                  <h3 className="lg:text-3xl text-2xl font-mono text-red-800">Newsletter</h3>
                  <p className="mt-10 text-xs font-mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                  <div className=" flex lg:justify-center lg:items-center rounded-md mt-10 lg:mr-10 ">
                    <input type="text" placeholder="Your Email address" className="border-[1px] border-gray-950 w-full lg:p-[12px_30px] text-xs lg:text-xl pt-0 pb-0 rounded-l-md font-thin " />

                    <Link className="bg-gray-900 hover:bg-red-700 duration-300 " href={"www.gmail.com"} type="submit">
                      <svg className="lg:w-10 lg:h-10 w-5 h-5 " fill="white" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 572 572"><g>
                        <path d="M287.5,491c-69.4,0-138.8,0-208.2,0c-29.6,0-50.8-21.1-50.8-50.5c0-96.2,0-192.4,0-288.6c0-29,21-50.4,49.9-50.4   c139.8-0.1,279.7-0.1,419.5,0c29.2,0,49.8,21.1,49.8,50.3c0,96.7,0,193.4,0,290.2c0,27.5-21.3,49-48.9,49   C428.4,491,358,491,287.5,491z M498.8,150.7c-140.7,0-280.8,0-421.2,0c0,13.1-0.1,25.8,0.1,38.6c0,1.6,1.5,3.5,2.8,4.6   c12.1,9.8,24.2,19.6,36.5,29.3c36.8,29.1,73.5,58.4,110.5,87.3c12.2,9.6,24.9,18.7,37.9,27.2c14.2,9.2,29.4,9.8,44.2,1   c8.5-5.1,17.1-10.3,25-16.4c16.8-12.9,33.1-26.4,49.7-39.6c37-29.4,74.1-58.7,111.1-88.1c1.6-1.3,3.3-3.5,3.3-5.4   C499,176.4,498.8,163.8,498.8,150.7z M77.8,441.6c140.6,0,280.6,0,420.6,0c0-62.2,0-124,0-186.4c-1.3,0.8-2,1.2-2.7,1.7   c-37.8,29.9-75.5,59.9-113.4,89.5c-14.2,11.1-28.4,22.3-43.6,31.8c-28.3,17.6-58.4,21.3-89,6.2c-13.1-6.5-25.7-14.4-37.3-23.3   c-43.6-33.8-86.6-68.4-129.8-102.6c-1.4-1.1-2.9-2.1-4.8-3.6C77.8,317.7,77.8,379.5,77.8,441.6z"></path></g>
                      </svg>
                    </Link>
                  </div>

                  <div className="flex gap-8 items-center mt-10">
                    <Link className="" href={"https://www.facebook.com/nawabriaz.riazahmed"}>
                      <Image src={"https://ugc.production.linktr.ee/79ee0b44-3ca1-4c85-a976-0e30caa5b9ba_IMG-7739.png?io=true&size=thumbnail-stack-v1_0"} width={40} height={15} alt="facebook" className="rounded-full text-center"></Image>
                    </Link>


                    <Link href={"https://www.linkdin.com/in/riaz-ahmed-zaur-a668832b6?utm_source=share&utm-campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                      <Image src={"https://logodix.com/logo/91001.png"} width={40} height={15} alt="Linkdin"></Image>
                    </Link>


                    <Link href={"https://github.com/Muhammed-Riaz"}>
                      <Image src={"https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png"} width={40} height={15} alt="Github"></Image>
                    </Link>


                  </div>
                </div>


                {/* right side  */}
                {/* Image */}
                <div className="relative">
                  <Image className="lg:h-full" src={"https://mr-tevor.myshopify.com/cdn/shop/files/news_letter.jpg?v=1638186268"} width={1000} height={1500} alt="fasion"></Image>
                  <div className="lg:absolute p-6 w-full lg:bottom-0 text-center text-white bg-gray-950">
                    <h4 className="lg:text-3xl text-xl">Mr.Tevor Magazine &amp; Digital</h4>
                    <p className="text-xs mt-5">Tempus egestas sed sed risus pretium quam vulputate dignissim.</p>
                  </div>
                </div>



              </div>


            </div>


          </div>


        </div>

        {/* second part  */}
        {/* parent div */}
        <div className="w-full bg-slate-800">
          {/* child1 */}
          <div className=" lg:max-w-7xl mx-auto ">
            {/* Now use grid  */}
            <div className="lg:flex lg:justify-center lg:items-center lg:h-28 gap-5 p-5 lg:p-0">
              {/* five div */}
              <div className="">
                <Link href={"#"}>
                  <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/logo_005.png?v=1641374811"} width={200} height={100} alt="img"></Image>
                </Link>
              </div>

              <div className="lg:mt-0 mt-10">
                <Link href={"#"}>
                  <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/logo_004.png?v=1641374811"} width={200} height={100} alt="img"></Image>
                </Link>
              </div>

              <div className="lg:mt-0 mt-10">
                <Link href={"#"}>
                  <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/logo_003.png?v=1641374811"} width={200} height={100} alt="img"></Image>
                </Link>
              </div>

              <div className="lg:mt-0 mt-10">
                <Link href={"#"}>
                  <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/logo_002.png?v=1641374811"} width={200} height={100} alt="img"></Image>
                </Link>
              </div>

              <div className="lg:mt-0 mt-10">
                <Link href={"#"}>
                  <Image src={"https://mr-tevor.myshopify.com/cdn/shop/files/logo_001.png?v=1641374811"} width={200} height={100} alt="img"></Image>
                </Link>
              </div>

            </div>


          </div>
        </div>

      </section>



    </main>

  )
}

export default page