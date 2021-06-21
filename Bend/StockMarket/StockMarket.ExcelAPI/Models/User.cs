using System.ComponentModel.DataAnnotations;

namespace StockMarket.ExcelAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Confirmed { get; set; }
    }
}