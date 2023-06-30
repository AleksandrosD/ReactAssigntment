import { useState,useEffect } from "react";
import Book from './Book';
//import books from './Books'; 
import Form from './assets/AddBookForm'
import Modal from "./assets/Modal";
//import books from "./Books"


export default function SectionTwo() {
    const [books, setJobs] = useState([]);
  
    useEffect(() => {
      let ignore = false;
      async function fetchBooks() {
        const response = await fetch('http://localhost:3000/books');
        const book = await response.json();
        console.log(book)
        if(!ignore) {
          setJobs(book);
        }
        return book;
      }
      
      fetchBooks();
  
      return () => {
        ignore = true;
      }
    }, []);
    
    const onAddBook = (newbook) => {
      // modal should close
      hideModal();
      // new job should be added to the DOM
      setJobs((books) => {
        return [...books, newbook];
      });
    };
  
    

  
  
  const bookLayout = books.map((book, i) => {
    return <Book book={book} key={i} />;
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
 
 
  
 

  const showModal = () => {
    setIsModalVisible(true);
  }

  const hideModal = () => {
    setIsModalVisible(false);
  }

  return (
    <section className="bg-white border-b py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        New Releases!
      </h2>
    <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-items-center pt-14'>
      {bookLayout}
      <Modal
        isVisible={isModalVisible}
        hideModal={hideModal}
      >
        <Form hModal={hideModal} onAddBook={onAddBook} />
      </Modal>
    </div>
    <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={showModal} > Add Book!!
    
    </button>
      
    </div>
    </section>
  );
}