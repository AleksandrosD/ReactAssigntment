import Book from './Book';
import books from './Books'; 

export default function SectionTwo() {
  const bookLayout = books.map((book, i) => {
    return <Book book={book} key={i} />;
  });

  return (
    <section className="bg-white border-b py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        New Releases!
      </h2>
    <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-items-center pt-14'>
      {bookLayout}
    </div>
    </div>
    </section>
  );
}