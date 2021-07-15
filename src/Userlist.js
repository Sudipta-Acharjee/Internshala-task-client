import React from 'react';
import './Userlist.css'
const userList = ({ user }) => {
    return (
        <section >
            <div >
            <table>
                <br/>
                <tr>
                    <td><h5>Name: {user.name}</h5></td>
                    <td><h5>E-mail: {user.email}</h5></td>
                    <td><h5>Phone: {user.phone}</h5></td>
                </tr>
            </table>
            </div>
        </section>
    );
};

export default userList;