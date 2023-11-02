const ResultItem = ({ name, isNotFound = false }) => {
    return (
        <div className={`cursor-pointer font-sans text-lg font-normal px-7 py-2 hover:bg-[#F4F4F4] ${isNotFound && 'text-red-600'}`}>
            {name}
        </div>
    )
}

export default ResultItem