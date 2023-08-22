import React , { useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";


const UpdateAlbum = (props) => {
  const { pos } = useParams();
  const navigate = useNavigate();
  // console.log(props);

  let { state, setState } = props;

  let [newUserId, setNewUserId] = useState("");
  let [newAlbumTitle, setNewAlbumTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
    console.log(newUserId);
    console.log(newAlbumTitle);
    state[pos].userId = newUserId;
    state[pos].title = newAlbumTitle;
    let newState = [...state];
    // console.log(newState);
    fetch(`https://jsonplaceholder.typicode.com/albums/${pos-1}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: newAlbumTitle,
        userId: newUserId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setState(newState);
    navigate(`/`);
  };

  return (
    <div className="bg-black text-white p-4" style={{ height: 'calc(100vh - 86px)' }}>
      <h1 className="text-3xl text-center">Update Post</h1>
      <form
        onSubmit={handleSubmit}
        className=" md:w-1/2 m-auto p-7  border-2  border-solid rounded-md border-slate-50 mt-4"
      >
        <label className="text-base block mb-2">User Id</label>
        <input
          className="p-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 ring-blue-500 mb-4 w-full"
          placeholder="Enter userId"
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
        />
        <label className="text-base block mb-2">Album Title</label>
        <input
          className="p-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 ring-blue-500 mb-4 w-full"
          placeholder="Enter Album Title"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#6469ff] text-white rounded-md text-xs py-2 px-4 hover:bg-[#4347cc] transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateAlbum;