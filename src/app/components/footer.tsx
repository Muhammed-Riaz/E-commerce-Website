"use client"
import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <footer className="text-gray-50 bg-gray-950 py-12 ">

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-8 gap-10  sm:px-6">

    <div >
      
      <Image src="/log.png" width={200} height={50} alt="logo" />

     
      <p className="mb-4 mt-10 text-xs">No: 58 A, East Madison Street, Baltimore, MD, USA 4508
      Phone : 0000 - 123 - 456789</p>
      <p className="text-xs font-mono">Email : riazahmedzaur110@gmail.com</p>
      <p className="font-mono ">Contact : +92 340-2800-715</p>
    </div>

    <div>
      <h3 className="mb-4 text-xl">Categories</h3>
      <ul className="text-xs">
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5 ">
          <Link href={"#"}>Wholesale</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Affiliates</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Search Terms</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Shipping</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Shipping</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Information</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Career</Link>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="mb-4 text-xl">About US</h3>
      <ul className="text-xs">
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5 ">
          <Link href={"#"}>About us</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Secure payment</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Contact Us</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Sitemap</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Stores</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>sale offers</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>New arrievals</Link>
        </li>
      </ul>

    </div>

    <div>
      <h3 className="mb-4 text-xl">Let Us Help</h3>
      <ul className="text-xs">
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5 ">
          <Link href={"#"}>My account</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Returns center</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Returns & exchange</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Shipping Rates</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>Help</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>SHOP</Link>
        </li>
        <li className="hover:text-red-700 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"#"}>FAQ</Link>
        </li>
      </ul>
    </div>

    </div>

    <p className="text-gray-50 text-center mt-10 text-xs">© 2024 Mr-Tevor Design Themes</p>
    </footer>
  )
}

export default Footer