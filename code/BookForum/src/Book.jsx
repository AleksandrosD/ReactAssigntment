import { PropTypes } from 'prop-types';

  export default function Book({ book }) {
    
    const { Title, Author, Image, Price } = book; 

    return (
        <button onClick={()=>{
            alert("You clicked me!");
        }}>
        <div className='grid justify-items-center p-14 hover:-translate-y-1 duration-300'>
            <img className='object-contain w-80 h-80' src={Image.src} alt={Image.alt} />
            <div>
                <h2 className='text-gray-600 whitespace-normal'>{Author}</h2> 
            </div>
            <div>
                <h1 className='text-center text-small '>{Title}</h1>
            </div>
            <div>
                <h1 className=' text-small' >Price: {Price}</h1> 
            </div>
        </div>
        </button>
    );
}

Book.propTypes = {
    book: PropTypes.shape({
      Image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      }),
      Title: PropTypes.string,
      Author: PropTypes.string,
      Price: PropTypes.string
    }).isRequired
};