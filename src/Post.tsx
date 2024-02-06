import React from 'react';

type PostProps = {
  post: {
    title: string;
    body: string;
    id: number;
  };
};

const Post: React.FunctionComponent<PostProps> = ({ post }) => {
  return (
    <div className='h-[200px] w-[600px] shadow-md rounded pt-[30px] bg-slate-400 text-pretty px-[15px] truncate gap-[10px] flex flex-col'>
      <h2>
        <strong> {post.title}</strong>
      </h2>
      <p>{post.body}</p>
      <p>
        <strong> ID: </strong>
        {post.id}
      </p>
    </div>
  );
};

export default Post;
