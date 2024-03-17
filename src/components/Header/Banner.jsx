import banner from '../../assets/image.jpeg'
const Banner = () =>{
    return(
        <div className='w-[90%]  text-white  m-auto'>
            <div className="hero rounded-3xl   min-h-screen" style={{background: `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                   <div className="pt-40 justify-center items-center">
                   <h1 className=" text-6xl font-bold text-[#FFFFFF]">Discover an exceptional cooking <br/> class tailored for you!</h1>
                   <p className=" text-xl pt-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br/>problems to become an exceptionally well world-class Programmer.</p>
                   <div className='flex pt-10 pb-20 justify-center gap-6'>
                   <button className="btn p-5 text-[#150B2B] bg-[#0BE58A] rounded-[50px] btn-primary border">Get Started</button>
                   <button className="btn p-5 text-[#fff] rounded-[50px]  btn-primary border">Get Started</button>
                   </div>
                </div>
              </div>
           </div>
            
        </div>
    )
}
export default Banner;