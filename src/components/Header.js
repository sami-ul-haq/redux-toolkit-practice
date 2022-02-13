import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
    
        <h1>Learning RTK (Query Redux Toolkit Query)</h1>

        <ul>
            <li><Link to={"/todos"}>Todo App Using crateSlice Method</Link></li>
            <li><Link to={"/posts"}>Posts Using crateSlice Method & createAsyncThunk for fetching data from APi</Link></li>
            <li><Link to={"/counter"}>Counter App Using createAction & createReducer Method</Link></li>
            <li><Link to={"/users"}>Users Using createApi Method</Link></li>
        </ul>

        <hr />
    
    </div>
  )
}

export default Header;