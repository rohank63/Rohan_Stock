using System.Collections.Generic;
using StockMarket.ExcelAPI.Models;

namespace StockMarket.ExcelAPI.Repositories
{
    public interface IExcelRepository
    {
        public void ExcelHelper(string filePath);
        public IEnumerable<StockPrice> GetData();
        public void UploadData(IEnumerable<StockPrice> arr);
    }
}