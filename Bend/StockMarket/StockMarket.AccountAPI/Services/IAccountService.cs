using System.Collections.Generic;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Services
{
    public interface IAccountService
    {
        public void AddUser(User item);
        public void Update(User item);
        public bool IsUserName(string username);
        public User GetUserById(int uid);
        public IEnumerable<User> GetAllUsers();
        public void Delete(User user);
        public User Validate(string uname, string pwd);
    }
}