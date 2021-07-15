import React from 'react';

const userList = ({setAlluser}) => {
    return (
        <section >
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Course</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        setAlluser.map(user =>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    );
};

export default userList;