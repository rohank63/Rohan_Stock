using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StockMarket.ExcelAPI.Models;
using StockMarket.ExcelAPI.Services;

namespace StockMarket.ExcelAPI.Controllers
{
    [Route("[controller]")]
    public class ExcelController: ControllerBase
    {
        private IExcelService _service;
        public ExcelController(IExcelService serv)
        {
            _service = serv;
        }

        [HttpPost]
        [Route("ImportStock")]
        public IActionResult ImportStock([FromBody] string filePath)
        {
            try
            {
                _service.ExcelHelper(filePath);
                return Ok();
            }
            catch(Exception ex){
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("AllData")]
        public IActionResult ExcelData()
        {
            try
            {
                IEnumerable<StockPrice> stock_price_data = _service.GetData();
                return Ok(stock_price_data);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        [HttpPost]
        [Route("UploadData")]
        public IActionResult UploadData([FromBody] List<StockPrice> arr)
        {
            
            try{
                _service.UploadData(arr);
                return Ok();
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
            
        }


    }
}