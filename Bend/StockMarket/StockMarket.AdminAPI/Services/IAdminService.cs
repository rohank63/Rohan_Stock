using System.Collections.Generic;
using StockMarket.AdminAPI.Models;

namespace StockMarket.AdminAPI.Services
{
    public interface IAdminService
    {
        public void Add(Company c);
        public IEnumerable<Company> GetAllCompanies();
        public void AddIPO(IPO ipo);
        public void DeleteIPO(IPO ipo);
        public IEnumerable<IPO> GetAllIPO();
        public void EditIPO(IPO ipo);
        public void EditCompany(Company c);
        public void DeleteCompany(string code);
        public Company GetCompanyByCode(string code);
        public IEnumerable<StockExchange> GetExchange();
        public void AddExchange(StockExchange se);
        public bool Validate(string uname, string pwd);
        public IEnumerable<StockPrice> GetStocks(string code);
    }
}