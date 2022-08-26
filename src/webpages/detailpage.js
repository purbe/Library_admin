import React, { useState, useEffect }  from 'react';
import './webpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const DetailPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState("");

      useEffect(() => {
        fetch('http://localhost:3000/books',{
           
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setBooks(data);
                    
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    
                }
            )
      }, [])

if (error) {
        return <div>Error : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
            <h3 className='text-center mt-4'>List Page</h3>
            <div className='container mt-5 border p-3'>
            <div className="row">
                <div className="col-12">
                    <h3>Book list</h3>
                    {/* <ul className='list-group'>
                        {books.map(book => (
                        <li className='list-group-item'>
                            {book.name}
                        </li>
                        ))}
                    </ul> */}
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Borrowed By</th>
                                <th>Date of borrow</th>
                                <th>Expected date of return</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book =>(
                                <tr>
                                    <th>{book.name}</th>
                                    <th>{book.auth_name}</th>
                                    <th>{book.fname} {book.lname}</th>
                                    <th>{book.borrow_date}</th>
                                    <th>{book.expected_return_date}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default DetailPage;