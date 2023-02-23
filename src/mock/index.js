export const user = {
    name: 'Thức Trần Trí',
    uid: 'smGBBdHl7sQNbKFVccwi3xEeui03',
    email: '19522321@gm.uit.edu.vn',
    picture: 'https://lh3.googleusercontent.com/a/AEdFTp5VJofewLLf8aa0bWlXpf3YxFmSuaj5t2IPOun3=s96-c',
};

export const product = {
    _id: 'jhf',
    name: 'ca',
    price: 100000,
    type: 'General',
    buyer: user,
};

export const bill = {
    _id: '1234r',
    host: user,
    product: [product, product, product],
};

export const workspaces = [
    {
        _id: '1234',
        name: 'Demo',
        host: user,
        bills: [bill, bill, bill],
    },
    {
        _id: '1',
        name: 'Demo 2',
        host: user,
        bills: [bill, bill, bill],
    },
    {
        _id: '12',
        name: 'Demo 3',
        host: user,
        bills: [bill, bill, bill],
    },
];
