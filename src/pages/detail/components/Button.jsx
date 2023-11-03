import { useNavigate } from 'react-router-dom'

import Icon from '../../../common/assets/img/arrow-icon.png'

const Button = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate("/")} className='flex gap-3 justify-center items-center p-3 md:p-4 rounded-[10px] bg-[#8362F2]'>
            <img src={Icon} alt="Icon" className='w-3 md:w-6' />
            <p className='text-sm md:text-lg font-medium text-white'>Back to Homepage</p>
        </button>
    )
}

export default Button