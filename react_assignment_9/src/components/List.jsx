import Card from './Card'

function List({users}){
    return (
        <div className="List">
            {users.map((u, index) => (
                <Card key={index} user={u}/>
            ))}
        </div>
    )
}

export default List