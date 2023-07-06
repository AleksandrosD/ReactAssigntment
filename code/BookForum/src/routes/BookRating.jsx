import Navbar from "../navbar";
import { useLoaderData, Link } from "react-router-dom";
//import { useState,useEffect } from "react";
import Reviews from "./Reviews";

export async function loader({ params }) {
  //const condition = params.BookRatingId =  ? :
  const jobResponse = await fetch(
    `http://localhost:3000/books/${params.BookRatingId}`
  );
  const book = await jobResponse.json();
  const revResponse = await fetch(
    `http://localhost:3000/review?bookId=${params.BookRatingId}`
  );
  const review = await revResponse.json();
  return { book, review };
}

export default function BookRating() {
  // const [revs, setRevs] = useState([]);
  const { book, review } = useLoaderData();

  // useEffect(() => {
  //   setRevs((prevRevs) => [...prevRevs, review]);
  // }, [review]);

  const RevLayout = review.map((array, i) => {
    return <Reviews rev={array} key={i} />;
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center">
          {book.Title}
        </h2>
      </div>

      <section className="text-neutral-700">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <div className="flex w-full my-2 justify-center items-center">
            <img src={book.Image.src} alt={book.Image.alt} />
          </div>
          <Link
            to="review/new"
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 mt-20 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Add Review!
          </Link>
          <h3 className="mb-6 text-3xl font-black">Reviews</h3>
        </div>

        <div className="flex w-full justify-center items-center">
          <div className="w-6/12 max-w-5xl mx-auto">{RevLayout}</div>
        </div>

        {/* <Reviews rev={review} /> */}
      </section>
    </div>
  );
}
