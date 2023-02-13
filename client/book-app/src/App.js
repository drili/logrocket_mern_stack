import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"

import CreateBook from "./components/CreateBook"
import ShowBookList from './components/ShowBookList'
import ShowBookDetails from './components/ShowBookDetails'
import UpdateBookInfo from './components/UpdateBookInfo'

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<ShowBookList></ShowBookList>}></Route>
                    <Route path="/create-book" element={<CreateBook></CreateBook>}></Route>
                    <Route path="/edit-book/:id" element={<UpdateBookInfo></UpdateBookInfo>}></Route>
                    <Route path="/show-book/:id" element={<ShowBookDetails></ShowBookDetails>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App