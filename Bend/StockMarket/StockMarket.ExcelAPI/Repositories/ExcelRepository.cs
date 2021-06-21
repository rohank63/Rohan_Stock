using System.Collections.Generic;
using System.IO;
using StockMarket.ExcelAPI.Data;
using StockMarket.ExcelAPI.Models;
using OfficeOpenXml;
using System;
using System.Linq;

namespace StockMarket.ExcelAPI.Repositories
{
    public class ExcelRepository : IExcelRepository
    {
        private DataContext _db;
        public ExcelRepository(DataContext db)
        {
            _db = db;
        }
        public void ExcelHelper(string filePath)
        {
            FileInfo file = new FileInfo(@filePath);
            string fileName = file.Name;
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
            using (ExcelPackage package = new ExcelPackage(file))
            {
                ExcelWorksheet worksheet = package.Workbook.Worksheets[0];
                //int totalRows = worksheet.Dimension.Rows;
                int totalRows = worksheet.Dimension.Rows;

                List<StockPrice> stockPrices = new List<StockPrice>();
                for (int i = 2; i <= totalRows; i++)
                {
                    stockPrices.Add(new StockPrice
                    {
                        CompanyCode = worksheet.Cells[i, 1].Value.ToString().Trim(),
                        StockExchangeName = worksheet.Cells[i, 2].Value.ToString().Trim(),
                        CurrentPrice = double.Parse(worksheet.Cells[i, 3].Value.ToString().Trim()),
                        Date = DateTime.Parse(worksheet.Cells[i, 4].Value.ToString().Trim()),
                        Time = worksheet.Cells[i, 5].Value.ToString().Trim().Split()[1]
                    });
                }
                _db.StockPrices.AddRange(stockPrices);
                _db.SaveChanges();
            }
        }

        public IEnumerable<StockPrice> GetData()
        {
            return _db.StockPrices.ToList();
        }

        public void UploadData(List<StockPrice> arr)
        {
            _db.StockPrices.AddRange(arr);
            var duplicates = _db.StockPrices.AsEnumerable().GroupBy(s => new{s.CompanyCode,s.Date,s.Time}).SelectMany(g => g.Skip(0)).ToList();
            _db.StockPrices.RemoveRange(duplicates);
            _db.SaveChanges();
        }
    }
}