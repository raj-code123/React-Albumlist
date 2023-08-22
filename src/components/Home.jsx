import React from 'react'
import Album from '../components/Album'

const Home = (props) => {

const { state, setState } = props;

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className=" px-4 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  bg-black ">
        {state.map((currAlbum, index) => (
          <Album
            state={state}
            setState={setState}
            albumUser={currAlbum.userId}
            photoNo={currAlbum.id}
            pos={index}
            title={currAlbum.title}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default Home