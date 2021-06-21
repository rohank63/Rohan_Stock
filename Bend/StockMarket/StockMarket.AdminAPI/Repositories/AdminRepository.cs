using System.Collections.Generic;
using System.Linq;
using StockMarket.AdminAPI.Data;
using StockMarket.AdminAPI.Models;

namespace StockMarket.AdminAPI.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private DataContext _db;
        public AdminRepository(DataContext db)
        {
            _db = db;
        }
        public void Add(Company c)
        {
            _db.Companies.Add(c);
            _db.SaveChanges();
        }

        public void AddExchange(StockExchange se)
        {
            _db.StockExchanges.Add(se);
            _db.SaveChanges();
        }

        public void AddIPO(IPO ipo)
        {
            _db.IPOs.Add(ipo);
            _db.SaveChanges();
        }

        public void DeleteCompany(string code)
        {
            Company c = _db.Companies.Find(code);
            _db.Companies.Remove(c);
            _db.SaveChanges();
        }

        public void DeleteIPO(IPO ipo)
        {
            _db.IPOs.Remove(ipo);
            _db.SaveChanges();
        }

        public void EditCompany(Company c)
        {
            _db.Companies.Update(c);
            _db.SaveChanges();
        }

        public void EditIPO(IPO ipo)
        {
            _db.IPOs.Update(ipo);
            _db.SaveChanges();
        }

        public IEnumerable<Company> GetAllCompanies()
        {
            return _db.Companies.ToList();
        }

        public IEnumerable<IPO> GetAllIPO()
        {
            return _db.IPOs.OrderBy(e => e.OpenDateTime).ToList();
        }

        public Company GetCompanyByCode(string code)
        {
            Company com = _db.Companies.Find(code);
            return com;
        }

        public IEnumerable<StockExchange> GetExchange()
        {
            return _db.StockExchanges.ToList();
        }

        public IEnumerable<StockPrice> GetStocks(string code)
        {
            var rowsToReturn = _db.StockPrices
                .Where(b => b.CompanyCode == code)
                .OrderBy(e => e.Date)
                .ThenBy(x => x.Time)
                .ToList();
            
            return rowsToReturn;
        }

        public bool Validate(string uname, string pwd)
        {
            if (uname == "Rohan" && pwd == "12345")
            {
                return true;
            }
            else return false;
        }
    }
}