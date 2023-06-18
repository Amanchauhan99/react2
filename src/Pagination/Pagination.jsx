/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

function Pagination(props){
    const [user,setUsers]=useState([])
    const [page,setPage]=useState(1)
    useEffect(()=>{
        
        axios.get(`http://localhost:3000/results?_limit=${5}&_page=${page}`).then((res)=>{
            console.log(res.data);
            setUsers(res.data)
        }).catch(()=>{
            console.log("fail to fetch");
        })
    },[page])

    return(
        <div>
            <h2>Pagination component</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam blanditiis officia illum ex, suscipit ut ea laudantium voluptas labore.
        </p>
        {
        user.length>0 && (
        <div>
            <table frame="box" rules="all" width={500} cellPadding={10} style={{margin:"20px auto"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {user.map((user) => {
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                    </tr>
                })}
                </tbody>
            </table>
            <div>
                <button disabled={page===1}  onClick={()=>{
                    setPage(page-1)
                }}>Prev</button>
                <button>{page}</button>
                <button disabled={page===5} onClick={()=>{
                    setPage(page+1)
                }}>Next</button>
            </div>
        </div>
        
        )}
        </div>
    
    )
}

export default Pagination