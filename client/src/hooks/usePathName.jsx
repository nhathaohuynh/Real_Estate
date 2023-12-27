import { useLocation, useNavigate } from 'react-router-dom'

const usePathName = () => {
	const navigate = useNavigate()
	const pathName = useLocation().pathname
	return {
		navigate,
		pathName,
	}
}

export default usePathName
