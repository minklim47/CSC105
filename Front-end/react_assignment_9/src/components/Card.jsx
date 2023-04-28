import '../styles/Card.css'

function Card({user}) {
    return (
        <div className='Card'>
            <p>{user.name}</p>
            <p>{user.job}</p>
            <p>{user.hobby}</p>
        </div>
    )
}

export default Card