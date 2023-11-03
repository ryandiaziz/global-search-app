import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import ResultItem from "./ResultItem"

const ResultContainer = () => {
    const navigate = useNavigate()
    const { suggestion, isNotFound } = useSelector((state) => state.country)

    return (
        suggestion.length > 0 || isNotFound
            ? <section className="max-md:mx-2 max-md:max-w-[400px] w-full md:w-[600px] lg:w-[700px] rounded-[5px] py-3 shadow-lg">
                {
                    isNotFound
                        ? <ResultItem name={"Data not found"} isNotFound={true} />
                        : suggestion.map((country, i) => (
                            <ResultItem
                                key={i}
                                name={country.name.common}
                                onClick={() => navigate(`/detail/${country.name.common}`, { state: country.name.official })}
                            />
                        ))
                }
            </section> : null
    )
}

export default ResultContainer