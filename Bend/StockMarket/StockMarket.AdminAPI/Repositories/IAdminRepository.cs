using System.Collections.Generic;
using StockMarket.AdminAPI.Models;

namespace StockMarket.AdminAPI.Repositories
{
    public interface IAdminRepository
    {
        public void Add(Company c);
        public IEnumerable<Company> GetAllCompanies();
        public void AddIPO(IPO ipo);
        void DeleteIPO(IPO ipo);
        public IEnumerable<IPO> GetAllIPO();
        public void EditIPO(IPO ipo);
        public void EditCompany(Company c);
        public void DeleteCompany(string code);
        public void AddExchange(StockExchange se);
        public Company GetCompanyByCode(string code);
        public IEnumerable<StockExchange> GetExchange();
        public bool Validate(string uname, string pwd);
    }
}