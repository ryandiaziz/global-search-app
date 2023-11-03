import { useSelector } from "react-redux"

import CountryTag from "./CountryTag"

const Heading = () => {
    const { countryData, altSpellings } = useSelector((state) => state.country)
    return (
        <>
            <section className="flex gap-3 items-baseline mt-10">
                <h1 className="text-5xl font-bold text-black">{countryData.name}</h1>
                <img src={countryData.flagImage} alt={countryData.flagALT} className="w-[46px]" />
            </section>
            <div className="mt-1 flex gap-2">
                {
                    altSpellings.map((item, i) => (
                        <CountryTag key={i}>
                            {item}
                        </CountryTag>

                    ))
                }
            </div>
        </>
    )
}

export default Heading