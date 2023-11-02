const MainContainer = ({ children }) => {
    return (
        <main className="border-2 border-red-500 h-screen max-w-[1440px] mx-auto">
            {children}
        </main>
    )
}

export default MainContainer