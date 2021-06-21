using System.Collections.Generic;
using StockMarket.ExcelAPI.Models;
using StockMarket.ExcelAPI.Repositories;

namespace StockMarket.ExcelAPI.Services
{
    public class ExcelService : IExcelService
    {
        private IExcelRepository _repo;
        public ExcelService(IExcelRepository repo)
        {
            _repo = repo;
        }
        public void ExcelHelper(string filePath)
        {
            _repo.ExcelHelper(filePath);
        }

        public IEnumerable<StockPrice> GetData()
        {
            return _repo.GetData();
        }

        public void UploadData(IEnumerable<StockPrice> arr)
        {
            _repo.UploadData(arr);
        }
    }
}