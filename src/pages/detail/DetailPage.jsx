import { useParams } from "react-router-dom"
import { useEffect } from "react"

const DetailPage = () => {
    const { country } = useParams()

    useEffect(() => {
        console.log(country)
    }, [])

    return (
        <div>{country}</div>
    )
}

export default DetailPage