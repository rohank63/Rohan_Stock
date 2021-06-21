using System.Collections.Generic;
using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Repositories;

namespace StockMarket.AdminAPI.Services
{
    public class AdminService : IAdminService
    {
        private IAdminRepository _repo;
        public AdminService(IAdminRepository repo)
        {
            _repo = repo;
        }
        public void Add(Company c)
        {
            _repo.Add(c);
        }

        public void AddExchange(StockExchange se)
        {
            _repo.AddExchange(se);
        }

        public void AddIPO(IPO ipo)
        {
            _repo.AddIPO(ipo);
        }

        public void DeleteCompany(string code)
        {
            _repo.DeleteCompany(code);
        }

        public void DeleteIPO(IPO ipo)
        {
            _repo.DeleteIPO(ipo);
        }

        public void EditCompany(Company c)
        {
            _repo.EditCompany(c);
        }

        public void EditIPO(IPO ipo)
        {
            _repo.EditIPO(ipo);
        }

        public IEnumerable<Company> GetAllCompanies()
        {
            return _repo.GetAllCompanies();
        }

        public IEnumerable<IPO> GetAllIPO()
        {
            return _repo.GetAllIPO();
        }

        public Company GetCompanyByCode(string code)
        {
            Company com = _repo.GetCompanyByCode(code);
            return com;
        }

        public IEnumerable<StockExchange> GetExchange()
        {
            return _repo.GetExchange();
        }

        public IEnumerable<StockPrice> GetStocks(string code)
        {
            return _repo.GetStocks(code);
        }

        public bool Validate(string uname, string pwd)
        {
            return _repo.Validate(uname, pwd);
        }
    }
}