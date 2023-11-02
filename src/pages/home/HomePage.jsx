// import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import Title from "./components/Title"
import SearchField from "./components/SearchField"
import ResultContainer from "./components/ResultContainer"
import { searchCountry, setinitsuggestion } from "../../redux/countrySlice"

const HomePage = () => {
    const dispatch = useDispatch()
    const [search, setsearch] = useState("")
    // const navigate = useNavigate()

    useEffect(() => {
        if (search) {
            const timeout = setTimeout(() => {
                dispatch(searchCountry(search))

            }, 500)

            return () => {
                clearTimeout(timeout)
            }
        } else {
            dispatch(setinitsuggestion())
        }

    }, [dispatch, search])

    return (
        <>
            <section className="h-1/2 flex gap-3 flex-col items-center justify-end">
                <Title />
                <SearchField onChange={(e) => setsearch(e.target.value)} />
            </section>
            <section className="mt-3 flex justify-center">
                <ResultContainer />
            </section>
        </>
    )
}

export default HomePage