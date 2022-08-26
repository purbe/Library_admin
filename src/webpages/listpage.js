import React, { useState, useEffect }  from 'react';
import './webpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ListPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [students, setStudents] = useState("");
    const [books, setBooks] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/students',{
           
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setStudents(data);
                    console.log(data)

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error)

                }
            )
      }, [])

      useEffect(() => {
        fetch('http://localhost:3000/only_books',{
           
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
                <div className="col-6">
                    <h3>Student list</h3>
                    <ul className='list-group'>
                        {students.map(student => (
                        <li className='list-group-item'>
                        {student.fname} {student.lname}
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-6">
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
                                <th>Author Name</th>
                                <th>Book Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book =>(
                                <tr>
                                    <th>{book.auth_name}</th>
                                    <th>{book.name}</th>
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
export default ListPage;