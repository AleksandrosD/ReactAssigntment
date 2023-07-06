import { Form } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedNote = {
    ...Object.fromEntries(formData),
    bookId: parseInt(params.BookRatingId),
  };
  const response = await fetch("http://localhost:3000/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedNote),
  });
  const note = await response.json();
  window.history.back();
  return { review };
}

function AddRevForm() {
  return (
    <Form
      method="post"
      className="selection:bg-blue-200 flex w-auto h-auto items-center flex-col gap-2"
    >
      <h1 className="text-4xl  text-white">Add Review</h1>

      <fieldset className="flex flex-col">
        <label htmlFor="title">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-96 rounded-lg focus:outline-none p-2"
          required
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
          required
        />
      </fieldset>

      <input
        className="bg-blue-500 rounded-lg w-20 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
        type="submit"
      ></input>
    </Form>
  );
}

export default AddRevForm;
