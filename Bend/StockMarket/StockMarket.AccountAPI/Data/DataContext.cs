using Microsoft.EntityFrameworkCore;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Data
{
    public class DataContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<StockPrice> StockPrices { get; set; }
        public DbSet<IPO> IPOs { get; set; }
        public DbSet<StockExchange> StockExchanges { get; set; }
        public DbSet<Sector> Sectors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            optionsBuilder.UseSqlServer(@"Server=localhost,1433; Database=StockMarket; User=sa; Password=Krishna123@; MultipleActiveResultSets=True;");
            
        }
    }
}