import PropTypes from 'prop-types';
import { useState } from "react";

export default function SearchBar({data}){
    const [filtrData, setFltrData] = useState([]);
    const [wordInput, setWordInput] = useState("");
    

    const handleFilter = (event) => {
        const searchBook = event.target.value;
        setWordInput(searchBook);
        //console.log(wordInput,filtrData.length)
        const titleFiltr = data.filter((book) => {
            return  book.Title.toLowerCase().includes(searchBook.toLowerCase());
        });
        
        setFltrData(titleFiltr);
        if (searchBook === "") {
            setFltrData([]);
        }else {
            const filteredData = [...titleFiltr];
            setFltrData(filteredData);
        }

    }

    //////////////////////////////////////////

    //////////////////////////////////////////
    
    return (
        <div className="bg-white inline-block flex-initial w-1/2">
          <input
            type="text"
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out "
            id="exampleSearch"
            value={wordInput}
            onChange={handleFilter}
            placeholder="Search Books"
          />
          {filtrData.length !== 0 && (
            <div className="relative">
              <div className="overflow-hidden overflow-y-auto w-full bg-white border border-solid border-neutral-300 rounded-md shadow-md absolute z-10">
                {filtrData.map((value, key) => {
                  return (
                    <div
                      className="flex hover:bg-gray-400 px-3 py-2 cursor-pointer"
                      key={key}
                      onClick={() => {
                        // Handle the item selection here
                        console.log(value.Title);
                      }}
                    >
                      {value.Title}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      );
      
    
}

SearchBar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            Title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
