import { useNavigate } from "react-router-dom"

function MyButton() {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/subsub')} style={{width: '100px', height: '100px', backgroundColor: 'red', marginBottom: 20}}>MyButton</div>
  )
}

export default MyButton