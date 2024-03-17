import PropTypes from 'prop-types'
import Cook from './Cook';
const Bookmark = ({bookmarks}) => {
    return (
        <div className="border mt-12 rounded-2xl">
            <div className=" text-center w-[490px] ">
                <h1 className="text-[24px] pt-8 pb-2 font-bold">Want to cook: <span>{bookmarks.length}</span></h1>
                
            </div>
            <div>
                <table className="m-3 text-[#878787] ">
                        <th>
                            <td className="pl-20">Name</td>
                            <td className="pl-20">Time</td>
                            <td className="pl-20">Calories</td>
                        </th>
                </table>
                <div className="w-[450px] pl-20 pb-6">
                <hr/>
                </div>
                {
                    bookmarks.map(bookmark => <Cook  key={bookmarks.id} bookmark={bookmark}></Cook>)
                }
                
            </div>
            <div className=" text-center w-[490px] ">
                <h1 className="text-[24px] pt-8 pb-2 font-bold">Currently cooking: <span>01</span></h1>
            </div>
            <div>
                <table className="m-3 text-[#878787] ">
                        <th>
                            <td className="pl-20">Name</td>
                            <td className="pl-20">Time</td>
                            <td className="pl-20">Calories</td>
                        </th>
                </table>
                <div className="w-[450px] pl-20 pb-6">
                <hr/>
                </div>
                {/* <table className="bg-slate-200">
                        <th className="flex text-[16px] text-[#878787] gap-2">
                            <tr className="pl-2">1</tr>
                            <tr className="pl-7">Name</tr>
                            <tr className="pl-7">Name</tr>
                            <tr className="pl-7">Time</tr>
                            <tr className="pl-9"><button className="p-3 rounded-3xl text-[#150B2B]  bg-[#0BE58A]">Preparing</button></tr>
                        </th>
                </table> */}
            </div>
        </div>
    );
};
Bookmark.propTypes ={
    bookmarks: PropTypes.array
}
export default Bookmark;