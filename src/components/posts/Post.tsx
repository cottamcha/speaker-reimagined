import { AiOutlineComment, AiOutlineHeart } from "solid-icons/ai"
import { FiTrash } from "solid-icons/fi"

import { profileImg } from "../../utils/tools"

const Post = () => {

    return (
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
    )
}
export default Post