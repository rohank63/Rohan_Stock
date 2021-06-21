using System;
using System.ComponentModel.DataAnnotations;

namespace StockMarket.AdminAPI.Models
{
    public class IPO
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string CompanyName { get; set; }
        [Required]
        public string StockExchangeName { get; set; }
        [Required]
        public double PricePerShare { get; set; }
        [Required]
        public int TotalShares { get; set; }
        [Required]
        public DateTime OpenDateTime { get; set; }
        public string Remarks { get; set; }
    }
}