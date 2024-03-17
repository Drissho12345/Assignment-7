import PropTypes from 'prop-types'
const Cook = ({bookmark}) => {
    const{id,name,time,caloric} =bookmark;
    return (
        <div>
            <table className="bg-slate-200 mt-4">
                        <th className="flex text-[16px] text-[#878787] gap-2">
                            <tr className="pl-2">{id}</tr>
                            <tr className="pl-7">{name}</tr>
                            <tr className="pl-7">{time}</tr>
                            <tr className="pl-7">{caloric}</tr>
                            <tr className="pl-9"><button className="p-3 rounded-3xl text-[#150B2B]  bg-[#0BE58A]">Preparing</button></tr>
                        </th>
            </table>
        </div>
    );
};
Cook.PropTypes={
    bookmark: PropTypes.object
}
export default Cook;