/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books}) => {
 
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
   <input
  type="text"
  placeholder="Search by title"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="my-4 p-2 mr-2 border border-slate-600 rounded-md float-right"
/>


      
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md bg-slate-400 py-2 text-lg'>No</th>
          <th className='border border-slate-600 rounded-md bg-slate-400'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden bg-slate-400'>
            Author
           
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden bg-slate-400'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md bg-slate-400'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {filteredBooks.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl mt-2' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                   <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </button>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl mt-1.5' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default BooksTable;
