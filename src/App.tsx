import { Component } from "solid-js"
import { BiRegularHomeAlt2, BiRegularMessageSquareAdd } from 'solid-icons/bi'
import { AiOutlineUser, AiOutlineComment, AiOutlineHeart  } from 'solid-icons/ai'
import { FiMoreHorizontal, FiTrash  } from 'solid-icons/fi'
import { FaRegularImage, FaRegularHeart } from "solid-icons/fa";
import { IoNotificationsOutline } from "solid-icons/io"
import { BsStars, BsImages } from 'solid-icons/bs'

const profileImg = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Tanned"

const App: Component = () => {
  return (
    <div class="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar starts */}
      <aside class="md:block w-40 md:w-64 lg:w-80 space-y-6 py-7 px-2 bg-gray-800">

        <a href="#" class="text-3xl font-bold flex md:justify-center md:ml-0 justify-start ml-3 pb-4 border-b border-gray-700 ">
          Speakr
        </a>

        <nav>
          <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-xl">
            <BiRegularHomeAlt2 size={18} />
            <span class="ml-3 font-semibold text-md">Home</span>
          </a>
          <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-xl">
            <AiOutlineUser size={18} />
            <span class="ml-3 font-semibold text-md">Profile</span>
          </a>
          <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-xl">
            <FiMoreHorizontal size={18} />
            <span class="ml-3 font-semibold text-md">More</span>
          </a>
          <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-xl">
            <IoNotificationsOutline size={18} />
            <span class="ml-3 font-semibold text-md">Notification</span>
          </a>
          <a href="#" class="flex items-center p-2 hover:bg-gray-700 rounded-xl">
            <BsStars size={18} />
            <span class="ml-3 font-semibold text-md">Discover</span>
          </a>
        </nav>

        <button class="flex items-center w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition duration-200">
          <BiRegularMessageSquareAdd size={18} />
          <p class="ml-3 text-md">Speak It</p>
        </button>


        <div class="flex-it my-3 hover:cursor-pointer">
            <div class="flex-it items-center flex-row p-3 hover:bg-gray-600 hover:rounded-xl rounded-xl transition duration-200 cursor-pointer">
                <div class="flex-it">
                    <div class="w-8 h-8 overflow-visible">
                    <img
                        class="rounded-full hover:opacity-80"
                        src={profileImg}
                    ></img>
                    </div>
                </div>
                <div class="flex-it xl:flex flex-grow flex-row justify-between items-center">
                    <div class="flex-it mx-3 font-semibold text-md">cottam1999</div>
                    <div class="flex-it hidden md:block">
                        <FiMoreHorizontal size={18} />
                    </div>
                </div>
            </div>
        </div>
      </aside>
      {/* Sidebar ends */}

      {/* Main Content */}
      <div class="flex-grow p-4 bg-gray-900 text-white">
        <header class="flex justify-between items-center p-4 bg-gray-800 text-xl font-bold mb-4 rounded-xl">
          Home
        </header>

        <div class="flex-it py-4 px-4 flex-row bg-gray-800 rounded-xl mb-4">
          <div class="flex-it mr-4">
            <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
              <img
                class="rounded-full"
                src={profileImg}
              ></img>
            </div>
          </div>
          {/* MESSENGER START */}
          <div class="flex-it flex-grow ">
            <div class="flex-it">
              <textarea
                name="content"
                id="glide"
                class="bg-gray-700 text-white text-base w-full p-2 rounded-lg resize-none !outline-none !border-none focus:ring-0 placeholder-gray-400 mb-2 min-h-[4rem] sm:min-h-[3rem]"
                placeholder={"What's new?"}
              />
            </div>
            <div class="flex-it mb-1 flex-row xs:justify-between items-center">
              <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
                <div class="upload-btn-wrapper">
                  <BsImages class="cursor-pointer" size={18} />
                  <input type="file" name="myfile" />
                </div>
              </div>
              <div class="flex-it w-30 mt-3 cursor-pointer">
                <button
                  type="button"
                  class="
                  disabled:cursor-not-allowed disabled:bg-gray-400
                  bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-5 rounded-xl flex-it transition duration-200"
                >
                  <div class="flex-it flex-row text-sm font-bold text-white items-center justify-center">
                    <BiRegularMessageSquareAdd size={18} class="mr-2" />
                    <span class="text-md">Speak It</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* MESSENGER END */}
        </div>
        {/* GLIDE POST START */}
        <div class="flex-it p-4 bg-gray-800 rounded-xl mb-4">
          <div class="flex-it flex-row">
            <div class="flex-it mr-4">
              <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
                <img
                  class="rounded-full"
                  src={profileImg}
                ></img>
              </div>
            </div>
            <article class="flex-it flex-grow flex-shrink cursor-pointer">
              <div class="flex-it justify-center flex-grow mb-1">
                <div class="flex-it justify-between flex-row w-full">
                  <div>
                    <span class="font-bold">cottam1999</span>
                    <span class="mx-2">&#8226;</span>
                    <span class="text-gray-400">2h</span>
                  </div>
                  <div class="text-gray-400 cursor-pointer transition hover:text-red-400">
                    <FiTrash size={18} />
                  </div>
                </div>
              </div>
              <div class="flex-it flex-row flex-grow-0 items-center mb-2">
                <div class="flex-it mr-3 mb-3 w-full">
                  My First Post
                </div>
              </div>
              <div class="flex-it flex-row flex-grow text-gray-400">
                <div class="flex-it flex-row items-center cursor-pointer mr-5 transition hover:text-blue-400">
                  <AiOutlineComment size={18} />
                  <span class="text-xs ml-2">321</span>
                </div>
                <div class="flex-it flex-row items-center cursor-pointer transition hover:text-pink-400">
                  <AiOutlineHeart size={18} />
                  <span class="text-xs ml-1">123</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside class="hidden lg:block md:w-1/5 w-64 bg-gray-800 p-4">
        <h2 class="text-xl font-bold pb-2 border-b border-gray-700">Trends</h2>
        <div class="mt-4">
          {/* Trend items */}
          <div class="p-3 hover:bg-gray-700 rounded-lg transition duration-200 hover:cursor-pointer">
            <h3 class="font-semibold">Sports</h3>
            <p class="text-gray-400">10 000 likes</p>
          </div>
          {/* Repeat for other trend items */}
        </div>
      </aside>
    </div>
  )
}

export default App


