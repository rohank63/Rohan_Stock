using System.Collections.Generic;
using StockMarket.ExcelAPI.Models;

namespace StockMarket.ExcelAPI.Services
{
    public interface IExcelService
    {
        public void ExcelHelper(string filePath);
        public IEnumerable<StockPrice> GetData();
        public void UploadData(List<StockPrice> arr);
    }
}