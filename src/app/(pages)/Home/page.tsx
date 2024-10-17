
function Home() {
  return (
    <section className="bg-[url('/hero.jpg')] w-[100%] h-[100vh] bg-cover">


    <div className="text-white flex flex-col justify-center items-center justify-items-center h-[50vh]">
      <b className="text-xl text-gray-50 mt-10">AFFORDABLE CLOTHING STORE</b>
      <h1 className="text-6xl text-pink-600 font-bold mt-10">Stylish Clothing For Your Family</h1>
      <button className="bg-yellow-500 text-xl py-3 mt-10 px-5 rounded-full hover:bg-yellow-700 hover:text-gray-300 hover:scale-90 duration-75 ">Shop Now</button>
    </div>

  </section>
  )
}

export default Home