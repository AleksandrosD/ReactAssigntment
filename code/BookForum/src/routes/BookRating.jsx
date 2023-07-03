import Navbar from "../navbar";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const jobResponse = await fetch(`http://localhost:3000/books/${params.BookRatingId}`);
    const job = await jobResponse.json();
    
    
    return { job};
  }


export default function BookRating(){
    const { job } = useLoaderData();
    
return(
    <div>
        <Navbar/>
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center ">
          {job.Title}
        </h2>
        </div>
    </div>
)
}
