const {Users} = require('./users');
const expect = require('expect');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Ankit',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Raj',
            room: 'React Course'
        },{
            id: '3',
            name: 'Pratik',
            room: 'Node Course'
        }];
    });
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ankit',
            room: 'Office fan'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return name for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Ankit', 'Pratik']);
        
    });
    it('should return name for React course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Raj']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    it('should not remove a user', () => {
        var userId = '12';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });
    it('should not find a user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();
    });
});