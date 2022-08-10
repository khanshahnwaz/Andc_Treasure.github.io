import tri from './tri.png'
import search from './search.png'
import Card from './Card';
import book from './book.png'

const About=()=>{
    return (
       <div className="border-8 border-black rounded-xl m-2 flex">
        <div  className="w-[20%] h-screen bg-black ">
            <img src={tri} alt='triangle' className='inline float-left'/><h1 className="text-gray-200 text-left px-10">andc<span className="text-white font-bold text-xl">TREASURE</span></h1>
            <ul className="mt-20  text-gray-400 text-lg text-left items-center">
                <li className="py-2 hover:border-gray-400 hover:border-2 hover:text-white w-32 mt-2 rounded-lg px-2">Home</li>
                <li className="py-2 hover:border-gray-400 hover:border-2 hover:text-white w-32 mt-2 rounded-lg px-2">Recents</li>
                <li className="py-2 hover:border-gray-400 hover:border-2 hover:text-white w-32 mt-2 rounded-lg px-2">Recycle bin</li>
                <li className="py-2 hover:border-gray-400 hover:border-2 hover:text-white w-32 mt-2 rounded-lg px-2">Contacts</li>
                <li className="py-2 hover:border-gray-400 hover:border-2 hover:text-white w-32 mt-2 rounded-lg px-2">Setting</li>
                <li className="py-2 hover:border-gray-400 hover:border-2 hover:text-white w-32 mt-2 rounded-lg px-2">Contact Us</li>

            </ul>
            <div className="mt-32 bg-gray-600 shadow-md rounded h-[15%] mx-2 ">
                <p1 className='text-gray-300 text-center tracking-normal align-center'>Talk to us for any issue.</p1>
                <div className="bg-black w-[45%] text-white align-center relative top-[30%] left-[30%] hover:border-white">Contact us  &#x2192;</div>
            </div>
        </div>

        {/* second box  */}
        <div className='mt-10 w-[60%] pr-2 pl-10'>
            <div className='flex justify-between'>
                <div><h1 className='text-3xl font-bold text-left  '>My Cloud</h1></div>
            <div><input type='text' placeholder='Search your file' className='border-2 px-4 py-2 rounded-xl w-96 text-left active:border-black active:shadow-md float-left'></input></div></div>
            <div className='mt-10 flex '>
                <div >
                <h2 className='text-3xl font-semibold text-left tracking-tightest '>Folders</h2></div>
                <div className='flex flex-grow justify-end'>
                <button className='bg-[#7e22c3] text-white py-1 px-3 rounded-xl hover:opacity-50'>Add +</button></div>
            </div>
            <div className='flex mt-2'>
               <Card color='bg-yellow-300 w-[33%] h-60 rounded-2xl px-3 ' pub='Books'/>
                <Card color='bg-green-300 w-[33%] h-60 rounded-2xl px-3 mx-1' pub='Journals'/>
                <Card color='bg-indigo-300 w-[33%] h-60 rounded-2xl px-3' pub='Conferences'/>
            </div>
            <div className='mt-10'>
                <div><h2 className='text-left text-2xl tracking-wide font-bold'>Upload Files Recently</h2></div>
                <div className='rounded shadow-lg px-3 py-3'>
                    <div className='flex justify-between'>
                        <div>Name &uarr;</div>
                        <div>Last modified &uarr;</div>
                    </div>
                    <div className='flex justify-between my-1'>
                        <div className='flex justify-start'>
                        <div className='inline bg-yellow-300 pb-0'><img src={book} alt='Book' className='h-8'/></div>
                        <div className='space-x-5'>
                            <h4 className='font-bold'>Love Guru</h4>
                            <p className='text-left'>Story of love</p>
                        </div>
                        </div>
                        <div>{Date.now().toLocaleString()}</div>
                    </div>

                    <div className='flex justify-between my-1'>
                        <div className='flex justify-start'>
                        <div className='inline-block bg-green-300'><img src={book} alt='Book' className='h-8'/></div>
                        <div className='space-x-5'>
                            <h4 className='font-bold'>Harry Potter</h4>
                            <p className='text-left'>Jadu ki kahani</p>
                        </div>
                        </div>
                        <div>{Date.now().toLocaleString()}</div>
                    </div>

                    <div className='flex justify-between my-1'>
                        <div className='flex justify-start'>
                        <div className='inline-block bg-indigo-300'><img src={book} alt='Book' className='h-8'/></div>
                        <div className='space-x-5'>
                            <h4 className='font-bold'>Netwon's Law</h4>
                            <p className='text-left'>Hell for students</p>
                        </div>
                        </div>
                        <div>{Date.now().toLocaleString()}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white  w-[20%] m-2 p-3'>
            <div>
            <h1 className='text-3xl text-left tracking-wide font-bold '>Shahnwaz Khan</h1>
            <p className='text-left mt-2'>Professor</p>
            </div>

            <div className='text-center  bg-blue rounded-t-full  border-b-0 border-[40px] border-black border-r-indigo-300 h-36 w-64 mt-10'>
                <div className='mt-10'>
                <p className='text-4xl text-center font-bold'>75%</p>
                <p className='text-center text-xl '>Profile</p>
                
                </div>
            </div>

            <div className='mt-24'>
                <div className='flex justify-between'>
                    <div className='flex justify-start'>
                    <img src={book} alt='book' className='bg-yellow-300'/>
                    <div >
                        <h3 className='text-xl font-semibold mx-1 align-center'>Books</h3>
                        <p className='text-sm mx-1 text-left'>13 files</p>
                    </div>
                    </div>
                    <p className='text-sm px-2 cursor-pointer hover:text-base'>View &rarr;</p>
                </div>

                <div className='flex justify-between my-5'>
                    <div className='flex justify-start'>
                    <img src={book} alt='book' className='bg-green-300'/>
                    <div >
                        <h3 className='text-xl font-semibold mx-1 align-center'>Journals</h3>
                        <p className='text-sm mx-1 text-left'>0 files</p>
                    </div>
                    </div>
                    <p className='text-sm px-2 cursor-pointer hover:text-base'>View &rarr;</p>
                </div>

                <div className='flex justify-between '>
                    <div className='flex justify-start'>
                    <img src={book} alt='book' className='bg-indigo-300'/>
                    <div >
                        <h3 className='text-xl font-semibold mx-1 align-center'>Conferences</h3>
                        <p className='text-sm mx-1 text-left'>10 files</p>
                    </div>
                    </div>
                    <p className='text-sm px-2 cursor-pointer hover:text-base'>View &rarr;</p>
                </div>
            </div>

            <div className='mt-10 border-dashed border-gray-500 border-4 rounded-xl'>
                  <div className='flex justify-between hover:border-2 border-gray-300'>
                    <p className='text-xl '>
                        shahnwaz@andc.du.ac.in
                    </p>
                    <p className='text-sm hover:text-gray-400 cursor-pointer'>Edit &rarr;</p>
                  </div>
                  <div className='flex justify-between hover:border-2 border-gray-300'>
                    <p className='text-xl '>
                        Professor
                    </p>
                    <p className='text-sm hover:text-gray-400 cursor-pointer'>Edit &rarr;</p>
                  </div>
                  <div className='flex justify-between hover:border-2 border-gray-300'>
                    <p className='text-xl '>
                        Computer Science
                    </p>
                    <p className='text-sm hover:text-gray-400 cursor-pointer'>Edit &rarr;</p>
                  </div>
                  <div className='flex justify-between hover:border-2 border-gray-300'>
                    <p className='text-xl  '>
                        Password
                    </p>
                    <p className='text-sm hover:text-gray-400 cursor-pointer'>Edit &rarr;</p>
                  </div>
            </div>
        </div>
       </div> 
    );
}
export default About;