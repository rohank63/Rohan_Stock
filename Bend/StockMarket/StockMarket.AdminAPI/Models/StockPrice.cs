using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StockMarket.AdminAPI.Models
{
    public class StockPrice
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Company")]
        public string CompanyCode { get; set; }
        [Required]
        [StringLength(30)]
        public string StockExchangeName { get; set; }
        [Required]
        public double CurrentPrice { get; set; }
        [Required]
        [Column(TypeName = "Date")]
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public Company Company {get; set;}
    }
}