import { useSelector } from "react-redux"

import ResultItem from "./ResultItem"

const ResultContainer = () => {
    const { suggestion, isNotFound } = useSelector((state) => state.country)
    return (
        suggestion.length > 0 || isNotFound ? <section className="border border-red-500 w-[700px] rounded-[5px] py-3 shadow-lg">
            {
                isNotFound && <ResultItem name={"Data not found"} isNotFound={true} />
            }
            {
                suggestion.map((country, i) => (
                    <ResultItem key={i} name={country.name.common} />
                ))
            }
        </section> : null
    )
}

export default ResultContainer