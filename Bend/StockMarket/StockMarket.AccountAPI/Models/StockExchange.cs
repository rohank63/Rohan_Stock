using System.ComponentModel.DataAnnotations;

namespace StockMarket.AccountAPI.Models
{
    public class StockExchange
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string StockExchangeName { get; set; }
        public string Brief { get; set; }
        public string Address { get; set; }
        public string Remarks { get; set; }
    }
}