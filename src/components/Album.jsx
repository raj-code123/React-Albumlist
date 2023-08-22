import React from 'react'
import { Link } from "react-router-dom";

function Album(props) {
  const { photoNo, title, albumUser, state, setState, pos } = props;
  const handleDelete = (e) => {
    const index = e.target.dataset.index - 1;
    state.splice(index, 1);
    let newState = [...state];
    fetch(`https://jsonplaceholder.typicode.com/albums/${photoNo}`, {
      method: "DELETE",
    });
    setState(newState);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 pb-14 cursor-pointer m-4 hover:scale-110 transform transition-transform duration-150 ease-in-out  relative ">
      <div className="text-[#e5e7eb]">
        <h4 className="font-semibold">Album User - {albumUser}</h4>
        <h4 className="font-semibold">PhotoNo - {photoNo}</h4>
        <p className="mt-2">{title}</p>
      </div>
      <div className="flex justify-end mt-4 absolute bottom-2 right-3">
        <Link to={`/update-album/${pos}`}>
          <button className="px-2 py-2 text-xs  mr-2 text-white bg-[#6469ff] transition duration-150 ease-in-out rounded hover:bg-blue-600">
            Update
          </button>
        </Link>
        <button
          className="px-2 py-2 text-xs text-white bg-red-500 rounded hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Album;