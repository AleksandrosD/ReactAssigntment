import { Form, useLoaderData, Link, redirect } from "react-router-dom";

export async function loader({ params }) {
  const jobResponse = await fetch(
    `http://localhost:3000/review/${params.reviewId}`
  );
  const review = await jobResponse.json();
  return { review };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const preparedreview = {
    ...updates,
  };
  const response = await fetch(
    `http://localhost:3000/review/${params.reviewId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedreview),
    }
  );
  window.history.back();
  return redirect(`/review/${params.reviewId}`);
}

function EditRev() {
  const { review } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
        <h1 className="text-white">Edit Rating</h1>
        <fieldset className="flex flex-col">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-96 rounded-lg focus:outline-none p-2"
            defaultValue={review.name}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="company">Rating</label>
          <textarea
            rows="4"
            className="block h-40 p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            name="rating"
            id="rating"
            defaultValue={review.rating}
          />
        </fieldset>

        <input
          className="bg-blue-500 rounded-lg w-20 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
      </Form>
    </div>
  );
}

export default EditRev;
