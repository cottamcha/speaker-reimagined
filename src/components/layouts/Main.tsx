import { ParentComponent } from "solid-js"
import TrendsSidebar from "../sidebars/Trends"
import MainSidebar from "../sidebars/Main"


const MainLayout: ParentComponent = ({ children }) => {

    return (
        <div class="flex min-h-screen bg-gray-900 text-white">
          <MainSidebar />
          <div class="flex-grow p-4 bg-gray-900 text-white">
            <header class="flex justify-between items-center p-4 bg-gray-800 text-xl font-bold mb-4 rounded-xl">
              Home
            </header>
            {children}
          </div>
          <TrendsSidebar />
        </div>
    )
}

export default MainLayout