import PropTypes from 'prop-types'

const CurrentCooking = ({data,index}) => {
    const{name,time,caloric} = data;
    return (
        <div>
            <table className="bg-slate-200 rounded-3xl h-9 mt-2">
                        <th className="flex text-[16px]  text-[#878787] gap-2">
                            <tr className="p-5">{index+1}</tr>
                            <tr className="p-5">{name}</tr>
                            <tr className="p-5 ">{time}</tr>
                            <tr className="p-5 ">{caloric}</tr>
                        </th>
                </table>
        </div>
    );
};
CurrentCooking.propTypes ={
    data:PropTypes.object
}
export default CurrentCooking;