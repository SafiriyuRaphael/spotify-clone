const Homepage = () => {
  return <div className="bg-[#121212] mx-3 p-2 rounded-[10px]">
    <div className="flex justify-between text-white px-5">
      <h1 className="text-[25px] text-bold">Trending songs</h1>
      <button >show all</button>
    </div>
    <section className="flex  ">
      <div className="px-5 mt-3 text-white ">
        <img className="size-[10vw] rounded-[5px] cursor-pointer hover:scale-105 duration-200" src="public/Akon ft.png" alt="" />
        <h2>Gheto Gheto</h2>
        <p className="text-[12px] cursor-pointer hover:scale-105 duration-200"><span className="bg-[azure] px-1 text-black ">E</span> Akon ft Ne-Yo</p>
      </div>

      <div className="px-5 mt-3 text-white ">
        <img className="size-[10vw] rounded-[5px] cursor-pointer hover:scale-105 duration-200" src="public/Celine Dion.png" alt="" />
        <h2>Goodbye</h2>
        <p className="text-[12px] cursor-pointer hover:scale-105 duration-200"><span className="bg-[azure] px-1 text-black">E</span> Celine Dion</p>
      </div>
      
      <div className="px-5 mt-3 text-white ">
        <img className="size-[10vw] rounded-[5px] cursor-pointer hover:scale-105 duration-200" src="public/Justin Bieber.png" alt="" />
        <h2>Somebody to love</h2>
        <p className="text-[12px] cursor-pointer hover:scale-105 duration-200"><span className="bg-[azure] px-1 text-black">E</span> Justin Bieber ft Drake</p>
      </div>

      <div className="px-5 mt-3 text-white ">
        <img className="size-[10vw] rounded-[5px] cursor-pointer hover:scale-105 duration-200" src="public/Michael Jackson.png" alt="" />
        <h2>Earthsong</h2>
        <p className="text-[12px] cursor-pointer hover:scale-105 duration-200"><span className="bg-[azure] px-1 text-black">E</span> Michael Jackson</p>
      </div>

      <div className="px-5 mt-3 text-white ">
        <img className="size-[10vw] rounded-[5px] cursor-pointer hover:scale-105 duration-200" src="public/Michael Jay.png" alt="" />
        <h2>Heal the world</h2>
        <p className="text-[12px] cursor-pointer hover:scale-105 duration-200"><span className="bg-[azure] px-1 text-black">E</span> Michael Jackson</p>
      </div>
      

      {/* <div className="px-5 mt-3 text-white ">
        <img className="size-[10vw] rounded-[5px] cursor-pointer hover:scale-105 duration-200" src="public/Shakira cover.png" alt="" />
        <h2>Try Everything</h2>
        <p className="text-[12px] cursor-pointer hover:scale-105 duration-200"><span className="bg-[azure] px-1 text-black">E</span> Shakira</p>
      </div> */}
    </section>

    <div className="flex justify-between text-white px-5 mt-10">
      <h1 className="text-[25px] text-bold">Popular artists</h1>
      <button >show all</button>
    </div>
    <section className="flex">
      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="public/Justin B.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Justin Bieber</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="public/M Jay.png" alt="" />
        <h2>Michael Jackson</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="public/Celine.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Celine Dion</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="public/Akon tour.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Akon</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="public/Shakira.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Shakira</h2>
      </div>

    </section>

    <div className="flex justify-between text-white px-5 mt-10">
      <h1 className="text-[25px] text-bold">Most played</h1>
      <button >show all</button>
    </div>
    <section className="flex">
      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="/J Bieber.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Justin Bieber</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="/MJ.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Michael Jackson</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="/Celine D.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Celine Dion</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="/Akon tour.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Akon</h2>
      </div>

      <div className="px-5 mt-3 text-white flex flex-col items-center">
        <img className="size-[10vw] rounded-[50%] cursor-pointer hover:scale-105 duration-200" src="/Shakira cover.png" alt="" />
        <h2 className="cursor-pointer hover:scale-105 duration-200">Shakira</h2>
      </div>
    </section>
    
  </div>
};

export default Homepage;