import PropTypes from 'prop-types'
import Cook from './Cook';
const Bookmark = ({bookmarks, cookHandle}) => {
    return (
        <div className="border mt-12 pb-4 shadow-xl rounded-2xl">
            <div className=" text-center w-[490px] ">
                <h1 className="text-[24px] pt-8 pb-2 font-bold">Want to cook: <span>{bookmarks.length}</span></h1>
                
            </div>
            <div>
                <table className="m-3 rounded-lg text-[#878787] ">
                        <th>
                            <td className="pl-20">Name</td>
                            <td className="pl-14">Time</td>
                            <td className="pl-14">Calories</td>
                        </th>
                </table>
                <div className="w-[450px] pl-20 pb-6">
                <hr/>
                </div>
                {
                    bookmarks.map((bookmark,index) => <Cook cookHandle ={cookHandle} key={bookmarks.id} index={index} bookmark={bookmark}></Cook>)
                }
                
            </div>
            
        </div>
    );
};
Bookmark.propTypes ={
    bookmarks: PropTypes.array,
    cookHandle: PropTypes.func
}
export default Bookmark;