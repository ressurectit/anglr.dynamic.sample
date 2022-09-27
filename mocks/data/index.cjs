module.exports = function(app)
{
    //USERS 
    app.useMock('GET', '/data/users.json', 'data/users.json');
};