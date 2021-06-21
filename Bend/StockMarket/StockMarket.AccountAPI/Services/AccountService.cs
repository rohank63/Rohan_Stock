using System.Collections.Generic;
using StockMarket.AccountAPI.Models;
using StockMarket.AccountAPI.Repositories;

namespace StockMarket.AccountAPI.Services
{
    public class AccountService : IAccountService
    {
        private IAccountRepository _repo;
        public AccountService(IAccountRepository repo)
        {
            _repo = repo;
        }

        public void AddUser(User item)
        {
            _repo.AddUser(item);
        }

        public void Delete(User user)
        {
            _repo.Delete(user);
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _repo.GetAllUsers();
        }

        public User GetUserById(int uid)
        {
            return _repo.GetUserById(uid);
        }

        public bool IsUserName(string username)
        {
            return _repo.IsUserName(username);
        }

        public void Update(User item)
        {
            _repo.Update(item);
        }

        public User Validate(string uname, string pwd)
        {
            return _repo.Validate(uname,pwd);
        }
    }
}