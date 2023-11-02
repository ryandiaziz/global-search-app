import SearchIcon from '../../../common/assets/img/search-icon.png'
import SearchIconColor from '../../../common/assets/img/search-icon-color.png'

const SearchField = ({ onChange }) => {
    return (
        <div className="w-[700px] h-[60px]">
            <div className="relative h-full w-full min-w-[200px]">
                <input
                    className="peer h-full w-full rounded-[10px] border-[0.5px] border-blue-gray-200 bg-transparent px-5 py-2.5 !pr-12 font-sans text-lg font-medium text-blue-gray-700 placeholder:text-[#C8C8C8] outline outline-0 transition-all focus:border-2 focus:border-[#8362F2] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Type any country name"
                    onChange={onChange}
                />
                <div className="absolute top-2/4 right-3 h-[30px] w-[30px] -translate-y-2/4 peer-focus:invisible">
                    <img src={SearchIcon} alt="Icon" />
                </div>
                <div className="absolute top-2/4 right-3 h-[30px] w-[30px] -translate-y-2/4 invisible peer-focus:visible">
                    <img src={SearchIconColor} alt="Icon" />
                </div>
            </div>
        </div>
    )
}

export default SearchField