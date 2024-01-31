import { Component, For, createSignal, createUniqueId } from "solid-js"
import { BiRegularMessageSquareAdd } from 'solid-icons/bi'
import {  BsImages } from 'solid-icons/bs'

import { profileImg } from "./utils/tools"

import MainLayout from "./components/layouts/Main"
import Post from "./components/posts/Post"


type Post = {
  id: string
  content: string
  user: {
    userName: string
    avatar: string
  }
  likesCount: number
  commentCount: number
  date: Date
}

const App: Component = () => {
  const [content, setContent] = createSignal("")
  const [posts, setPosts] = createSignal<Post[]>([])

  const createPost = () => {
    const post = {
      id: createUniqueId(),
      content: content(),
      user: {
        userName: "cottie1999",
        avatar: profileImg
      },
      likesCount: 0,
      commentCount: 0,
      date: new Date()
    }

    setPosts([post, ...posts()])

    setContent("")
    console.log(JSON.stringify(posts()))
  }

  return (
        <MainLayout>
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
                    onInput={(event) => {
                      setContent(event.currentTarget.value)
                    }}
                    value={content()}
                    name="content"
                    id="speak"
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
                    onClick={createPost}
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
            <For each={posts()}>
            {() =>
              <Post />
            }        
            </For>
        </MainLayout>

  )
}

export default App


