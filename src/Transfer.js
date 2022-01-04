import React from 'react';
const Transfer = ({UserData,setUserData}) => {
    const  buttonhandler = () => {
        // setUserData(...UserData,UserData.Data[0].balance=UserData.Data[0].balance+500)
        console.log(UserData)
    }
    return (
        <div>
            <button onClick={buttonhandler}>
                Transfer
            </button>
        </div>
    );
}

export default Transfer;
