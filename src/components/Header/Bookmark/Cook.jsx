import PropTypes from 'prop-types'
const Cook = ({bookmark,index, cookHandle}) => {
    const{name,time,caloric} =bookmark;
    
    return (
        <div>
            <table className="bg-slate-200 rounded-3xl mt-4">
                        <th className="flex p-2 text-[16px] text-[#878787] gap-2">
                            <tr className="pt-2 pl-5">{index+1}</tr>
                            <tr className="pl-5">{name}</tr>
                            <tr className="pl-5">{time}</tr>
                            <tr className="pl-5">{caloric}</tr>
                            <tr className="pl-4"><button onClick={()=>cookHandle(bookmark)} className="p-3 rounded-3xl text-[#150B2B]  bg-[#0BE58A]">Preparing</button></tr>
                        </th>
            </table>
        </div>
    );
};
Cook.propTypes ={
    bookmark: PropTypes.object,
    cookHandle: PropTypes.func
}
export default Cook;