import HighlightText from "./HighlightText"
import Tooltip from "./Tooltip"

const InfoLayout = ({ title, content, datas, desc }) => {
    return (
        <div className="w-[540px] h-[143px] py-3 flex flex-col justify-between">
            <h3 className="font-medium text-lg">{title}</h3>
            <HighlightText text={content} />
            <div className="text-sm font-medium">
                <span className="relative peer underline text-[#8362F2] cursor-pointer">{datas.length > 1 ? `${datas.length} countries` : `${datas.length} country`}</span> with this {desc}
                <Tooltip datas={datas} />
            </div>
        </div>
    )
}

export default InfoLayout