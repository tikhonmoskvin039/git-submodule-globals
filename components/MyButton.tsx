import { useNavigate } from "react-router-dom"

const MyButton = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/subsub')} style={{width: 100, height: 100, backgroundColor: 'red'}}>MyButton</div>
  )
}

export default MyButton