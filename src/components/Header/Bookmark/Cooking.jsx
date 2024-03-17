import PropTypes from 'prop-types'
import CurrentCooking from './CurrentCooking';

const Cooking = ({bio}) => {
    return (
        <div className='border mt-5 shadow-xl rounded-2xl pb-4'>
            <div className=" text-center   w-[490px] ">
                <h1 className="text-[24px] pt-8 pb-2 font-bold">Currently cooking: <span>{bio.length}</span></h1>
            </div>
            <div>
                <table className="m-3 text-[#878787] ">
                        <th>
                            <td className="pl-24">Name</td>
                            <td className="pl-20">Time</td>
                            <td className="pl-20">Calories</td>
                        </th>
                </table>
                <div className="w-[450px] pl-20 pb-6">
                <hr/>
                </div>
            </div>
            {
                bio.map((data,index) => <CurrentCooking key={bio.id} index={index} data={data}></CurrentCooking>)
            }
            
        </div>
    );
};
Cooking.propTypes={
    bio: PropTypes.object
}

export default Cooking;