import React from 'react'

const Head = () => {
  return (
    <div className="grid grid-flow-col  p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://th.bing.com/th/id/OIP.uT9aOM2WpCqotn_AaZAEHgHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain"
          alt="menu"
        />
        <img
          className="h-10 object-cover w-52 "
          src="https://th.bing.com/th/id/OIP.8Ip-fZmPKYEruRSaDpvy0QHaEK?rs=1&pid=ImgDetMain"
          alt="YouTube"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          name=""
          id=""
          className="w-1/2 border-2 p-1 border-red-500 rounded-l-xl focus:outline-none focus:bg-red-50  pl-3"
          placeholder="Enter To Search "
        />
        <button className="p-1.5 rounded-r-xl bg-red-400 rounded- text-white font-bold hover:bg-red-500  ">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 "
          src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
          alt="User"
        />
      </div>
    </div>
  );
}

export default Head;