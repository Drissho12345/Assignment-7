import profile from '../../assets/Frame (1).png'
import pic from '../../assets/Frame.png'
const Header = () => {
    return(
        <div className="w-[90%] mt-12 mb-12 m-auto flex justify-between">
            <h1 className='text-3xl font-bold'>Recipe Calories</h1>
            <ul className="gap-12 flex text-[16px] cursor-pointer justify-between">
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Recipes</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Search</li>
            </ul>
            <div className="flex gap-4">
                <div className='flex border  text-[16px] rounded-lg p-2 gap-2 bg-slate-300'>
                    <img className='w-[24px] h-[24px]' src={pic} alt="" />
                    <input placeholder="Search" className=" bg-slate-300  " type="text" />
                </div>
                <h1 className="bg-[#0BE58A] h-12 w-12 rounded-full text-[#150B2B]  border">
                    <a  href="#">
                        <img className='p-2' src={profile} alt="" />
                    </a>
                </h1>
            </div>
        </div>
        
        
    );
};
export default Header;