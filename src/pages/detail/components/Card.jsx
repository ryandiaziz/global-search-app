const Card = ({ children }) => {
    return (
        <article className="rounded-[5px] shadow-lg w-[540px] h-[143px]">
            <div className="h-full w-full p-7 relative overflow-hidden flex flex-col justify-center">
                {children}
            </div>
        </article>
    )
}

export default Card