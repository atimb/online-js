// In-memory database for storing online users in a hashmap
var Users = {
    size: 0,
    list: {},
    add: function(name) {
        if (!Users.list[name]) {
            Users.size++;
        }
        Users.list[name] = {};
    },
    remove: function(name) {
        if (Users.list[name]) {
            Users.size--;
        }
        delete Users.list[name];
    }
};

module.exports = Users;
