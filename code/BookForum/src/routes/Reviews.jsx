//import { useLoaderData } from "react-router-dom";
import { useFetcher, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export async function action({ params }) {
  try {
    const response = await fetch(
      `http://localhost:3000/review/${params.reviewId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete the note.");
    }

    return null;
  } catch (error) {
    console.error(error);
    // Handle the error or throw it to be caught higher up the call stack
    throw error;
  }
}

function Reviews({ rev }) {
  const { name, rating, id, bookId } = rev;
  const fetcher = useFetcher();
  let navigate = useNavigate();
  const handleEdit = () => {
    const editUrl = `/BR/${bookId}/review/${id}/edit`;
    navigate(editUrl);
  };

  return (
    <div className="flex w-full gap-6 text-center ">
      <div className="flex-grow">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div className="h-20 mt-5  overflow-hidden rounded-t-lg bg-[#9d789b]"></div>

          <div className="p-6">
            <h4 className="mb-4 text-2xl font-semibold">{name}</h4>
            <hr />
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              {rating}
            </p>
          </div>
          <fetcher.Form
            method="post"
            action={`review/${id}/destroy`}
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="focus:outline-none  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              {" "}
              Delete!{" "}
            </button>
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleEdit}
            >
              Edit!
            </button>
          </fetcher.Form>
          {/* <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit!</button> */}
        </div>
      </div>
    </div>
  );
}
export default Reviews;
Reviews.propTypes = {
  rev: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    bookId: PropTypes.number.isRequired,
  }).isRequired,
};
