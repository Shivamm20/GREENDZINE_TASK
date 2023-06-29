import React, { useEffect, useState } from 'react'

const Index = () => {

    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");



    const getUsers = async () => {
        const response = await fetch("https://reqres.in/api/users");

        const FinalData = await response.json();
        setUsers(FinalData.data);

    }

    useEffect(() => {
        getUsers();
    }, [])

    return (<>
        <div className="search">
            <input type='text' placeholder='Search...' className='search' onChange={e => setQuery(e.target.value)} />

        </div>

        <div className="container">

            {
                users.filter(user => user.first_name.toLowerCase().includes(query))
                    .map((curElem) => {
                        return (
                            <>
                                <div className="card_item" key={curElem.id}>

                                    <div className="card_inner">
                                        <div className="seeMore">{curElem.id}</div>
                                        <img src={curElem.avatar} alt="" />

                                    </div>
                                    <div className="userName">{curElem.first_name}</div>
                                </div>
                            </>
                        )
                    })
            }
        </div>

    </>
    )
}

export default Index;
