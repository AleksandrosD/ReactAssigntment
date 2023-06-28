import { useState } from "react";
import Book from './Book';
import books from './Books'; 
import Form from './assets/AddBookForm'
import Modal from "./assets/Modal";


export default function SectionTwo() {
  //const filteredJobs = jobs.filter(job => job.status === selectedStatus);
  
  const bookLayout = books.map((book, i) => {
    return <Book book={book} key={i} />;
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  //const [selectedStatus, setSelectedStatus] = useState(1);
  
  // const statusButtons = Object.keys(statuses).map(statusId => {
  //   const buttonClass = classNames(
  //     "px-4 py-2 border",
  //     {
  //       "bg-blue-500": selectedStatus === parseInt(statusId)
  //     }
  //   )
  //   return (
  //     <button
  //       key={statusId}
  //       className={buttonClass}
  //       onClick={() => setSelectedStatus(parseInt(statusId))}
  //     >
  //       {statuses[statusId]}
  //     </button>
  //   );
  // })
  
 
  
 

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
        <Form hModal={hideModal}/>
      </Modal>
    </div>
    <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={showModal} > Add Book!!
    
    </button>
      
    </div>
    </section>
  );
}