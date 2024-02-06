import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { ReactEventHandler } from 'react';

interface Post {
  title: string;
  body: string;
  id: number;
}

interface searchBarProps {
  posts: Post[];
  setSearchResults: React.Dispatch<React.SetStateAction<Post[]>>;
}

const SearchBar: React.FunctionComponent<searchBarProps> = ({
  posts,
  setSearchResults,
}) => {
  const handleSubmit: ReactEventHandler = (e) => e.preventDefault();
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.value) return setSearchResults(posts);
    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );
    setSearchResults(resultsArray);
  };
  return (
    <header className='mb-[10px] flex flex-row gap-[8px] py-[15px]'>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          id='search'
          onChange={handleSearchChange}
          placeholder='Write here'
          className='focus:border-[#575555] grow w-[200px] h-[38px] rounded border-[#575555] bg-[#e0e0da] pl-[4px]   focus:border-b-2 focus:outline-none '
        />
        <button className='pl-[5px]'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
