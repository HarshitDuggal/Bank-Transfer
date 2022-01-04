import React from 'react';

const Customerdata = (props) => {
    //console.log(props.UserData);
    return (
         <div>
             <table >
                 <tbody>
                     <tr>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Balance</th>
                     </tr>
                 </tbody>
             {props.UserData.Data.map((user,i) => {
                 return (
                     <>    
                            <tbody >
                                 <tr>
                                     <td>{user.name}</td>
                                     <td>{user.Email}</td>
                                     <td>{user.balance}</td>
                                 </tr>
                             </tbody>               
                     </>
                 )
             })}
             </table>
         </div>
    );
}

export default Customerdata;
