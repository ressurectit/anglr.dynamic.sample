module.exports = function(app)
{
    //USERS 
    app.useMock('GET', '/data/users.json', 'data/users.json');

    //USER 1 DETAIL
    app.useMock('GET', '/data/user-1.json', 'data/users-1.json');

    //USER 2 DETAIL
    app.useMock('GET', '/data/user-2.json', 'data/users-2.json');

    //USER 3 DETAIL
    app.useMock('GET', '/data/user-3.json', 'data/users-3.json');

    //USER 4 DETAIL
    app.useMock('GET', '/data/user-4.json', 'data/users-4.json');

    //USER 5 DETAIL
    app.useMock('GET', '/data/user-5.json', 'data/users-5.json');

    //USER 6 DETAIL
    app.useMock('GET', '/data/user-6.json', 'data/users-6.json');

    //USER 7 DETAIL
    app.useMock('GET', '/data/user-7.json', 'data/users-7.json');
};