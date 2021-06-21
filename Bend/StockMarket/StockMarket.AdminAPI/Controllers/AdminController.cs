using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Services;

namespace StockMarket.AdminAPI.Controllers
{
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private IAdminService _service;
        public AdminController(IAdminService serv)
        {
            _service = serv;
        }

        [HttpGet]
        [Route("AllCompany")]
        public IActionResult GetAll()
        {
           try
            {
                IEnumerable<Company> companies = _service.GetAllCompanies();
                return Ok(companies);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
           
        }

        [HttpGet]
        [Route("AllIPO")]
        public IActionResult GetIPO()
        {
           try
            {
                IEnumerable<IPO> ipos = _service.GetAllIPO();
                return Ok(ipos);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
           
        }

        [HttpGet]
        [Route("AllExchange")]
        public IActionResult AllExchange()
        {
           try
            {
                IEnumerable<StockExchange> stock_ex = _service.GetExchange();
                return Ok(stock_ex);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
           
        }

        [HttpPost]
        [Route("AddExchange")]
        public IActionResult AddExchange([FromBody] StockExchange item)
        {
            try
            {
                _service.AddExchange(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("AddCompany")]
        public IActionResult AddCompany([FromBody] Company item)
        {
            try
            {
                _service.Add(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("EditCompany")]
        public IActionResult EditCompany([FromBody] Company item)
        {
            try
            {
                _service.EditCompany(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("GetAllCompany/{code}")]
        public IActionResult GetCompanyByCode(string code)
        {
            try
            {
                Company co = _service.GetCompanyByCode(code);
                return Ok(co);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("DeleteCompany/{code}")]
        public IActionResult DeleteCompany(string code)
        {
            try
            {
                _service.DeleteCompany(code);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        
        [HttpPost]
        [Route("AddIPO")]
        public IActionResult AddIPO([FromBody] IPO item)
        {
            try
            {
                _service.AddIPO(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("DeleteIPO")]
        public IActionResult DeleteIPO([FromBody] IPO item)
        {
            try
            {
                _service.DeleteIPO(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("EditIPO")]
        public IActionResult EditIPO([FromBody] IPO item)
        {
            try
            {
                _service.EditIPO(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("Validate/{uname}/{pwd}")]
        public IActionResult Validate(string uname, string pwd)
        {
            try
            {
                bool adminTest = _service.Validate(uname, pwd);
                if(adminTest)
                    return Ok("Truee");
                return Ok("Falsee");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("GetStocks/{code}")]
        public IActionResult GetStocks(string code)
        {
            try{
                IEnumerable<StockPrice> stock_p = _service.GetStocks(code);
                return Ok(stock_p);
            }
            catch (Exception ex)
            {
                return StatusCode(500,ex.Message);
            }
        }
    }
}