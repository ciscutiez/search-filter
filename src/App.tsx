import './App.css';
import ListPage from './ListPage';
import SearchBar from './SearchBar';
import { getPosts } from './api/axios';
import { useEffect, useState } from 'react';

type Post = {
  id: number;
  body: string;
  title: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center w-[800px]  ml-[400px] mt-[10px] pt-[10px]'>
        <div>Search Filter</div>
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
        <ListPage searchResults={searchResults} />
      </div>
    </div>
  );
}

export default App;
