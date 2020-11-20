import { useState } from 'react';
import { createContainer } from 'unstated-next';

type AccountInfo = {
    isLogin: boolean;
    phoneNumber: string;
    userName: string;
    profilephoto: string;
    gender: number;
    age: number;
};
const accountInfo: AccountInfo = {
    isLogin: false,
    phoneNumber:'',
    userName: '',
    profilephoto: '',
    gender: 2,
    age: null,
}
const accountState = () => {
    const [account, setAccount] = useState(accountInfo);
    const clearAccount = () => {
        setAccount(accountInfo);
    }
    return { account, setAccount, clearAccount };
};

const AccountState = createContainer(accountState);
export default AccountState;
