import React from 'react';

function User({ user }){
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}
function UserList() {
    const users = [
        {
            id: 1,
            username: 'bom',
            email: 'saebomi000324@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];
    return(
        <div>
            <div>
                {users.map(user =>(
                    <User user={user} key={user.id}/>
                ))}
                {/*<User user={users[0]} />
                <User user={users[1]} />
                <User user={users[2]} />*/}
            </div>
        </div>
    );
}

export default UserList;