import PropTypes from 'prop-types'

const CurrentCooking = ({data,index}) => {
    const{name,time,caloric} = data;
    return (
        <div>
            <table className="bg-slate-200 h-9 mt-2">
                        <th className="flex p-2 text-[16px]  text-[#878787] gap-2">
                            <tr className="pl-2">{index+1}</tr>
                            <tr className="pl-7">{name}</tr>
                            <tr className="pl-7">{time}</tr>
                            <tr className="pl-7">{caloric}</tr>
                        </th>
                </table>
        </div>
    );
};
CurrentCooking.propTypes ={
    data:PropTypes.object
}
export default CurrentCooking;