/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Globe from "../../common/assets/svg/globe.svg"
import Button from "./components/Button"
// import Heading from "./components/Heading"
import Card from "./components/Card"
import HighlightText from "./components/HighlightText"
import InfoLayout from "./components/InfoLayout"
import CountryTag from "./components/CountryTag"
import { detailCountry, setinitcountry, getCurrencies } from "../../redux/countrySlice"

const DetailPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        countryData,
        isLoading,
        altSpellings,
        latlong,
        currencies,
        callingCodes } = useSelector((state) => state.country)

    useEffect(() => {
        if (location.state) {
            dispatch(detailCountry(location.state))
        } else {
            navigate("/")
        }

        return () => {
            dispatch(setinitcountry())
        }
    }, [])

    return (
        isLoading
            ? <p>Loading</p>
            : <section className="px-20 py-10">
                <Button />
                <button onClick={() => dispatch(getCurrencies())}>get</button>
                {/* <Heading />
                 */}
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
                <div className="mt-5 flex gap-6 flex-wrap">
                    <Card >
                        <img src={Globe} alt="Globe" className='absolute w-[204px] right-0 top-4' />
                        <h3 className='text-lg font-medium'>LatLong</h3>
                        <HighlightText text={`${latlong[0]}.0, ${latlong[1]}.0`} />
                    </Card>
                    <Card>
                        <h3 className="text-lg font-normal">Capital: <span className="font-medium">{countryData.capital}</span></h3>
                        <h3 className="text-lg font-normal">Region: <span className="font-medium">{countryData.region}</span></h3>
                        <h3 className="text-lg font-normal">Subregion: <span className="font-medium">{countryData.subregion}</span></h3>
                    </Card>
                    <InfoLayout
                        title={"Calling code"}
                        desc={"calling code"}
                        content={countryData.callcode}
                        datas={callingCodes}
                    />
                    <InfoLayout
                        title={"Currency"}
                        desc={"currency"}
                        content={countryData.currency}
                        datas={currencies}
                    />
                </div>
            </section>
    )
}

export default DetailPage