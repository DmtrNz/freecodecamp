import React from 'react';

// Определяем интерфейс для типа данных кошелька
interface UserWalletType {
    title: string;
    amount: number;
}

// Определяем интерфейс для пропсов компонента UserWallet
interface UserWalletPropsType {
    wallet: UserWalletType;
}

// Компонент UserWallet, который принимает пропсы типа UserWalletPropsType
export const UserWallet: React.FC<UserWalletPropsType> = ({ wallet }) => {
    return <div>title: {wallet.title}, amount: {wallet.amount}</div>;
};

// Компонент UserMoney, который отображает список кошельков
export const UserMoney: React.FC = () => {
    const wallets: UserWalletType[] = [
        { title: 'bitcoin', amount: 1 },
        { title: '$', amount: 100 },
    ];

    return (
        <div>
            {wallets.map((wallet, index) => (
                <UserWallet key={index} wallet={wallet} />
            ))}
        </div>
    );
};
