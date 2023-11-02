const ResultItem = ({ name, isNotFound = false, onClick }) => {
    return (
        <div
            className={`cursor-pointer font-sans text-lg font-normal px-7 py-2 hover:bg-[#F4F4F4] ${isNotFound && 'text-red-600'}`}
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default ResultItem