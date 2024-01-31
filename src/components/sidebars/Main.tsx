import { BiRegularHomeAlt2, BiRegularMessageSquareAdd } from 'solid-icons/bi'
import { AiOutlineUser } from 'solid-icons/ai'
import { FiMoreHorizontal  } from 'solid-icons/fi'
import { IoNotificationsOutline } from "solid-icons/io"
import { BsStars } from 'solid-icons/bs'
import { TbSpeakerphone } from 'solid-icons/tb'

const profileImg = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Tanned"

const MainSidebar = () => {

    return(
        <aside class="md:block w-16 xs:w-[30vw] md:w-64 lg:w-80 space-y-6 py-5 px-2 bg-gray-800">
            <TbSpeakerphone class="block xs:hidden ml-3" size={25} />
            <div class='flex justify-center'>
                <a href="#" class="text-3xl font-bold hidden pb-4 border-b border-gray-700 xs:block">
                Speakr
                </a>
            </div>

            <nav>
                <a href="#" class="flex items-center justify-center xs:justify-normal p-2 hover:bg-gray-700 rounded-xl">
                    <BiRegularHomeAlt2 size={18} />
                    <span class="ml-3 font-semibold text-md hidden xs:block">Home</span>
                </a>
                <a href="#" class="flex items-center justify-center xs:justify-normal p-2 hover:bg-gray-700 rounded-xl">
                    <AiOutlineUser size={18} />
                    <span class="ml-3 font-semibold text-md hidden xs:block">Profile</span>
                </a>
                <a href="#" class="flex items-center justify-center xs:justify-normal p-2 hover:bg-gray-700 rounded-xl">
                    <FiMoreHorizontal size={18} />
                    <span class="ml-3 font-semibold text-md hidden xs:block">More</span>
                </a>
                <a href="#" class="flex items-center justify-center xs:justify-normal p-2 hover:bg-gray-700 rounded-xl">
                    <IoNotificationsOutline size={18} />
                    <span class="ml-3 font-semibold text-md hidden xs:block">Notification</span>
                </a>
                <a href="#" class="flex items-center justify-center xs:justify-normal p-2 hover:bg-gray-700 rounded-xl">
                    <BsStars size={18} />
                    <span class="ml-3 font-semibold text-md hidden xs:block">Discover</span>
                </a>
            </nav>

            <button class="flex items-center xs:w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition duration-200">
                <BiRegularMessageSquareAdd size={18} />
                <p class="ml-3 text-md hidden xs:block">Speak It</p>
            </button>


            <div class="flex-it my-3 hover:cursor-pointer">
                <div class="flex-it items-center justify-center flex-row p-2 hover:bg-gray-600 rounded-full xs:hover:rounded-xl xs:rounded-xl transition duration-200 cursor-pointer">
                    <div class="flex-it">
                        <div class="w-8 h-8 overflow-visible xs:ml-2 ml-0 mb-1">
                        <img
                            class="rounded-full hover:opacity-80"
                            src={profileImg}
                        ></img>
                        </div>
                    </div>
                    <div class="flex-it xl:flex flex-grow flex-row justify-between items-center">
                        <div class="flex-it mx-3 font-semibold text-md hidden xs:block">cottam1999</div>
                        <div class="flex-it hidden md:block">
                            <FiMoreHorizontal size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default MainSidebar 