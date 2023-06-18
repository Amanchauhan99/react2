

export const getUsers = (setUsers, setState) => {

    fetch("https://randomuser.me/api/?results=20")
    .then((res)=>res.json())
    .then((data)=>{
        setUsers(data.results)
        console.log(data.results)
    setState(data.results)
    }

    )

}