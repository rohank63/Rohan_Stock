using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace StockMarket.AccountAPI.Models
{
    public class Company
    {
        [Key]
        public string CompanyCode {get; set;}
        [Required]
        public string CompanyName { get; set; }
        [Required]
        public string TurnOver { get; set; }
        public string CEO { get; set; }
        public string Board { get; set; }
        [Required]
        public string StockExchangeName { get; set; } 
        [Required]
        public string SectorName { get; set; }
        public string Writeup { get; set; }
        [Required]
        public string StockCode { get; set; }

        
    }
}