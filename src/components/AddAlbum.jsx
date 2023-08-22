import React, { useState } from "react";
function CreateAlbum(props) {
  let [userId, setUserId] = useState("");
  let [photoNo, setPhotoNo] = useState("");
  let [title, setTitle] = useState("");
  let { state, setState } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const currAlbum = {
      userId: userId,
      id: photoNo,
      title: title,
    };
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(currAlbum),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    state.unshift(currAlbum);
    setState(state);
    setUserId("");
    setPhotoNo("");
    setTitle("");
  };
  return (
    <div className=" bg-black text-white p-4" style={{ height: 'calc(100vh - 86px)' }}>
      <h1 className="text-3xl text-center">Create Post</h1>
      <form className=" border-2  border-slate-50 md:w-1/2 m-auto p-7 border-solid rounded-md mt-4" onSubmit={handleSubmit}>
        <label className="text-base block mb-2">User Id </label>
        <input
          type="text"
          placeholder="Enter userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="p-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 ring-blue-500 mb-4 w-full"
        />
        <label className="text-base block mb-2">Photo No </label>
        <input
          type="text"
          placeholder="Enter Photo No."
          value={photoNo}
          required
          onChange={(e) => setPhotoNo(e.target.value)}
          className="p-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 ring-blue-500 mb-4 w-full"
        />
        <label className="text-base block mb-2">Title </label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 ring-blue-500 mb-4 w-full"
        />
        <div className="btn-container mt-4">
          <button className="create-post-btn bg-[#6469ff] text-white font-bold px-4 py-2 rounded">
            Create Album
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateAlbum;