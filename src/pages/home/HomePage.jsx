// import { useNavigate } from "react-router-dom"

import Title from "./components/Title"
import SearchField from "./components/SearchField"

const HomePage = () => {
    // const navigate = useNavigate()

    return (
        <section className="h-1/2 flex gap-3 flex-col items-center justify-end">
            <Title />
            <SearchField />
        </section>
    )
}

export default HomePage