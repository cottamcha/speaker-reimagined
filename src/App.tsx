import { Component } from "solid-js"
import { BiRegularMessageSquareAdd } from 'solid-icons/bi'
import { AiOutlineComment, AiOutlineHeart  } from 'solid-icons/ai'
import { FiTrash  } from 'solid-icons/fi'
import {  BsImages } from 'solid-icons/bs'

import MainSidebar from "./components/sidebars/Main"
import TrendsSidebar from "./components/sidebars/Trends"

const profileImg = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Tanned"

const App: Component = () => {
  return (
    <div class="flex min-h-screen bg-gray-900 text-white">

      <MainSidebar />

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

      <TrendsSidebar />
      
    </div>
  )
}

export default App


