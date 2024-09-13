
import './App.css'
import AddBooks from './Components/AddBooks'
import BookDashBoard from './Components/BookDashBoard'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import AddAuthor from './Components/AddAuthor'
import AuthorDashBoard from './Components/AuthorDashBoard'
import EditBook from './Components/EditBook'

function App() {
  const [books,setBooks] = useState([]);
  const [author,setAuthor] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BookDashBoard books={books} setBooks={setBooks} />}/>
        <Route path='/addbooks' element={<AddBooks books={books} setBooks={setBooks}/>}/>
        <Route path={"/authorDashboard"} element={<AuthorDashBoard author={author} setAuthor={setAuthor}/>}/>
        <Route path='/addauthor' element={<AddAuthor author={author} setAuthor={setAuthor}/>}/>
        <Route path="/editbook" element={<EditBook books={books} setBooks={setBooks}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
