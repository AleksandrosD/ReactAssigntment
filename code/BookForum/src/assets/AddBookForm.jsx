import { useState } from "react";
import PropTypes from 'prop-types';

import Books from "../Books"


export default function AddBookForm({hModal}){
    
    const [bookFormState, setBookFormState] = useState({
        Title: "",
        Author: "",
        Image: {src:"",
                alt:""},
        Price: "",
      });
      
      
      
      const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        if (name === 'Image.src') {
          setBookFormState((prevState) => ({
            ...prevState,
            Image: {
              ...prevState.Image,
              src: value
            }
          }));
        } else {
          setBookFormState((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
      };

    const handleAddJobFormSubmit = (e) => {
        e.preventDefault();
        passBook(bookFormState);
        hModal();
        
        //console.log("hello")
      }
      function passBook(x){
        Books.push(x);
      }
      
    return(
        <div className=''>
        <form
          onSubmit={handleAddJobFormSubmit}
          className=" selection:bg-blue-200 flex flex-col gap-2 text-center "
        >
          <h1 className="text-3xl">Add a Book!</h1>

          <fieldset className="flex flex-col ">
            <label htmlFor="title">Book Title</label>
            <input
              onChange={handleInputChange}
              value={bookFormState.Title}
              type="text"
              name="Title"
              id="title"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="company">Book Author</label>
            <input
              onChange={handleInputChange}
              value={bookFormState.Author}
              type="text"
              name="Author"
              id="author"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="location">Img Url!</label>
            <input
              onChange={handleInputChange}
              value={bookFormState.Image.src}
              type="text"
              name="Image.src"
              id="Image.src"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="postDate">Book Price!</label>
            <input
              onChange={handleInputChange}
              value={bookFormState.Price}
              type="text"
              name="Price"
              id="Price"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
         
          <input
            className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
            type="submit"
           // hideModal={hideModal}
            onClick={handleAddJobFormSubmit}
          ></input>
        </form>
        </div>
    )
}

AddBookForm.propTypes = {
  hModal: PropTypes.func.isRequired,
};
