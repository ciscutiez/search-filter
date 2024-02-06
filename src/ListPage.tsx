import React from 'react';
import Post from './Post';

type PostType = {
  id: number;
  title: string;
  body: string;
};
interface ListPageProps {
  searchResults: PostType[];
}

const ListPage: React.FunctionComponent<ListPageProps> = ({
  searchResults,
}) => {
  const results = searchResults.map((post) => (
    <Post key={post.id} post={post} />
  ));
  const content = results?.length ? (
    results
  ) : (
    <article className=''>
      <p>No Matching Posts</p>
    </article>
  );

  return (
    <div className='text-[16px] flex justify-center flex-col items-center gap-[10px]'>
      {content}
    </div>
  );
};

export default ListPage;
