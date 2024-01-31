import { For } from "solid-js";
import { randomize } from "../../utils/tools";

const trends = [
    {
        category: "Sports",
        content: "Local team secures a dramatic last-minute win in the national league!",
        likeCount: randomize()
    },
    {
        category: "Entertainment",
        content: "New action movie breaks box office records on opening weekend!",
        likeCount: randomize()
    },
    {
        category: "Technology",
        content: "Revolutionary new battery technology promises to double the life of smartphones!",
        likeCount: randomize()
    },
    {
        category: "Politics",
        content: "Major policy reform announced, aiming to reshape the public education system!",
        likeCount: randomize()
    },
    {
        category: "Lifestyle",
        content: "Celebrity chef reveals secret recipe for the perfect summer salad!",
        likeCount: randomize()
    },
    {
        category: "Science",
        content: "Breakthrough discovery in space exploration could change our understanding of the universe!",
        likeCount: randomize()
    }
];



const TrendsSidebar = () => {
    return(
        <aside class="hidden lg:block md:w-1/5 w-64 bg-gray-800 p-4 pt-11">
            <div class="flex justify-center">
                <h2 class="text-3xl font-bold pb-2 border-b border-gray-700">Trends</h2>
            </div>
            <div class="mt-4">
            {/* Trend items */}
            <For each={trends}>
                {(trend) =>
                    <div class="flex flex-col bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 ease-in-out cursor-pointer overflow-hidden mb-4">
                    <div class="px-3 py-2">
                        <h5 class="text-md font-bold text-white">{trend.category}</h5>
                    </div>
                    <div class="px-3 py-2">
                        <p class="text-gray-300 text-sm mb-2">{trend.content}</p>
                        <span class="text-gray-400 text-xs">{trend.likeCount.toLocaleString()} likes</span>
                    </div>
                    </div>
                }
            </For>

            </div>
        </aside>
    )
}

export default TrendsSidebar
