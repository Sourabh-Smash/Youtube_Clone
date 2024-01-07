import React from 'react'

const Head = () => {
  return (
    <div className="grid grid-flow-col  p-5 shadow-lg">
      <div className="flex col-span-1"> 
        <img
          className="h-8"
          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          alt="menu"
        />
        <img 
          className="h-8 object-cover w-24 mx-3 "
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="YouTube"
        />
      </div>
      <div className='col-span-10 text-center'> 
        <input type="text" name="" id="" className='w-1/2 border-2 p-1 border-red-500 rounded-l-xl focus:outline-none focus:bg-red-50 ' />
        <button className='p-1.5 rounded-r-xl bg-red-400 rounded- text-white font-bold hover:bg-red-500  '>Search</button> 
      </div>
      <div className='col-span-1'>
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