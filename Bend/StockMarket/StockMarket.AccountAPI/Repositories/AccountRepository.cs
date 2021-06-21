using System.Collections.Generic;
using System.Linq;
using StockMarket.AccountAPI.Data;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private DataContext _db;
        public AccountRepository(DataContext db)
        {
            _db = db;
        }

        public void AddUser(User item)
        {
            _db.Users.Add(item);
            _db.SaveChanges();
        }

        public void Delete(User user)
        {
            _db.Users.Remove(user);
            _db.SaveChanges();
        }

        public IEnumerable<User> GetAllUsers()
        {
            IEnumerable<User> UserList = _db.Users.ToList();
            return UserList;
        }

        public User GetUserById(int uid)
        {
            User user = _db.Users.SingleOrDefault(x => x.Id == uid);
            return user;
        }

        public bool IsUserName(string username)
        {
            List<User> UserList = _db.Users.ToList();
            User user = UserList.Find(x => x.Username == username);
            if (user == null)
            {
                return false;
            }
            else return true;
        }

        public void Update(User item)
        {
            _db.Users.Update(item);
            _db.SaveChanges();
        }

        public User Validate(string uname, string pwd)
        {
            User user = _db.Users.SingleOrDefault(i => i.Username == uname && i.Password == pwd);
            return user;
        }
    }
}