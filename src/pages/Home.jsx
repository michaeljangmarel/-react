import { Helmet } from 'react-helmet-async'
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRoom } from '../../react-query/query/RoomQuery';
 
const Home = () => { 

  const {data : books  , error , isLoading} = useQuery({
    queryKey : ['books'],
    queryFn : fetchRoom ,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts!</div>;

    return (
    <div>
       <Helmet>
        <title>Home : Data</title>
       </Helmet>
       <p>Home page welcome</p>

       <h3>Room lists</h3>
       {books.map((post) => (
        <div key={post.bookId}>
          <h3>{post.title}</h3>
          <p>{post.price}</p>
        </div>
      ))}
    </div>
    
  )
}

export default Home