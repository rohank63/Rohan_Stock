using System.ComponentModel.DataAnnotations;

namespace StockMarket.ExcelAPI.Models
{
    public class Sector
    {
        [Key]
        
        public int Id { get; set; }
        [Required]
        public string SectorName { get; set; }
        public string Brief { get; set;}
    }
}