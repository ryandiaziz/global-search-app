/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Globe from "../../common/assets/svg/globe.svg"
import Button from "./components/Button"
import Heading from "./components/Heading"
import Card from "./components/Card"
import HighlightText from "./components/HighlightText"
import InfoLayout from "./components/InfoLayout"
import Loader from "../../common/components/Loader"
import { detailCountry, setinitcountry } from "../../redux/countrySlice"

const DetailPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        countryData,
        isLoading,
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
            ? <Loader />
            : <section className="px-2 sm:px-10 md:px-20 py-10">
                <Button />
                <Heading />
                <div className=" mt-5 flex gap-6 flex-wrap flex-col xl:flex-row items-center">
                    <Card >
                        <img src={Globe} alt="Globe" className='absolute w-[140px] md:w-[204px] right-0 top-4' />
                        <h3 className='text-base md:text-lg font-medium'>LatLong</h3>
                        <HighlightText text={`${latlong[0]}.0, ${latlong[1]}.0`} />
                    </Card>
                    <Card>
                        <h3 className="text-base md:text-lg font-normal">Capital: <span className="font-medium">{countryData.capital}</span></h3>
                        <h3 className="text-base md:text-lg font-normal">Region: <span className="font-medium">{countryData.region}</span></h3>
                        <h3 className="text-base md:text-lg font-normal">Subregion: <span className="font-medium">{countryData.subregion}</span></h3>
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