import { BiRegularHomeAlt2, BiRegularMessageSquareAdd } from 'solid-icons/bi'
import { AiOutlineUser } from 'solid-icons/ai'
import { FiMoreHorizontal  } from 'solid-icons/fi'
import { IoNotificationsOutline } from "solid-icons/io"
import { HiOutlineSparkles } from 'solid-icons/hi'
import { SiSparkar } from 'solid-icons/si'
import MainLayout from '../layouts/Main'

const profileImg = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Tanned"

const MainSidebar = () => {

    return(
        <aside class="md:block w-16 xs:w-[30vw] md:w-64 lg:w-80 space-y-6 py-5 px-2 bg-gray-800">
            <SiSparkar class="block xs:hidden ml-3" size={25} />
            <div class='flex justify-center'>
                <SiSparkar size={37} class=" pb-4 hidden xs:block mt-[8px] pl-4"/>
                <a href="#" class="text-3xl font-bold hidden xs:pb-4 xs:block">
                    peakr
                </a>
                <p class="text-xs text-[9px] mt-[17px] hidden xs:block pr-[14px] sm:pr-0">reimagined</p>
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
                    <HiOutlineSparkles size={18} />
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