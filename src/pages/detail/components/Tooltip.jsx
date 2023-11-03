const Tooltip = ({ datas }) => {
    return (
        <div className="bg-[#525252] rounded-[10px] absolute mt-5 py-2 px-3 invisible peer-hover:visible hover:visible max-h-[300px] overflow-y-auto transition-all duration-500">
            {
                datas.map((item, i) => (
                    <div key={i} className="text-white py-2 px-3 text-sm font-medium">{item.name}</div>
                ))
            }
        </div>
    )
}

export default Tooltip