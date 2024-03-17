import pic from '../../../assets/Frame (2).png'
import photo from '../../../assets/Frame (3).png'



import PropTypes from 'prop-types';
const Card = ({card,  handleAddToBookmark}) => {
    
    const {image,ingredients,description,caloric,name,time} = card;
    return (
        <div className='border rounded-3xl p-6 shadow-xl mb-6'>
                <img className='rounded-3xl object-cover   w-full h-[250px]  ' src={image} alt=""/>
                <div className='p-3'>
                    <h1 className='text-xl text-[#282828] font-bold'>{name}</h1>
                    <h4 className='mt-4 mb-4 text-[16px]'>{description}</h4>
                    <hr />
                    <h1 className='text-[18px] pt-2 font-bold'>ingredients: <span>{ingredients.length}</span></h1>
                    <p className='pb-4 pt-4'>
                        {
                            ingredients.map(item => <li key={card.id}>{item}</li>)
                        } 
                    </p>
                    <hr />
                    <div className='flex pt-4 pb-1 gap-2'>
                        <div className='flex gap-2'>
                            <img src={pic} alt="" />
                            <p>{time}</p>
                        </div>
                        <div  className='flex gap-2'>
                            <img src={photo} alt="" />
                            <p>{caloric}</p>
                        </div>
                    </div>
                    <div>
                    <button onClick={() => handleAddToBookmark(card)} className='text-[#150B2B] rounded-[50px] p-4 text-xl bg-[#0BE58A]'>Want to Cook</button>
                    
                    </div>
                </div>
        </div>
        
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequird,
    handleAddToBookmark: PropTypes.func
}

export default Card;