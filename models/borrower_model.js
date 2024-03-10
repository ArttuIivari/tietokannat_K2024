const db = require('../database');

const borrower = {
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from borrower where id_borrower=?', [id], callback);
  },
  add: function(borrower, callback) {
    return db.query(
      'insert into borrower (name,author,isbn) values(?,?,?)',
      [borrower.name, borrower.author, borrower.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from borrower where id_borrower=?', [id], callback);
  },
  update: function(id, borrower, callback) {
    return db.query(
      'update borrower set name=?,author=?, isbn=? where id_borrower=?',
      [borrower.name, borrower.author, borrower.isbn, id],
      callback
    );
  }
};
module.exports = borrower;