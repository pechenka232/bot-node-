export const bankAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                internalType: "address",
                type: "address"
            },
            {
                indexed: false,
                name: "amount",
                internalType: "uint256",
                type: "uint256"
            }
        ],
        name: "Deposit",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                internalType: "address",
                type: "address"
            },
            {
                indexed: false,
                name: "amount",
                internalType: "uint256",
                type: "uint256"
            }
        ],
        name: "Withdrawal",
        type: "event"
    }
];
