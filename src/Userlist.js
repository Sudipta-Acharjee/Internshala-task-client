import React from 'react';

const userList = ({user}) => {
    return (
        <section >
            <table className="table table-borderless">
                <div>
                <tbody>
                        <td><h4>{user.name}</h4></td>
                        <td><h4>{user.email}</h4></td>
                        <td><h4>{user.phone}</h4></td>
                </tbody>
                </div>
            </table>
        </section>
    );
};

export default userList;