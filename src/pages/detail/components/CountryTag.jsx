const CountryTag = ({ children }) => {
    return (
        <div className='h-[25px] bg-[#8DD4CC] rounded-[50px] w-max text-xs font-bold text-white px-3 flex justify-center items-center'>
            {children}
        </div>
    )
}

export default CountryTag