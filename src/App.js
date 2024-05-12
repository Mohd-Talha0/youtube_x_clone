import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";

const App = () => {
  return (
     < AppContext>
         <BrowserRouter>
              <div className='flex flex-col h-full'>
                 <Header />
                 <Routes>  
                    <Route path="/" exact element={<Feed/>} /> // home page // using exact ensures the execution of the route on load
                    <Route path="/searchResult/:searchQuery" element={<SearchResult/>} />  // search query       
                    <Route path="/video/:id" element={<VideoDetails/>} />
                 </Routes>  // element tells which component will be implemented in the particular route
              </div>
         </BrowserRouter>
     </ AppContext>
     );
};

export default App