
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';



  export default function Book({ book }) {
 
    
    const { Title, Author, Image, Price, id } = book; 

    return (
        <Link to={`BR/${id}`}>
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
        </Link>
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
      Price: PropTypes.string,
      id: PropTypes.number
    }).isRequired
};