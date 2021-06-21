using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AccountAPI.Models;
using StockMarket.AccountAPI.Services;

namespace StockMarket.AccountAPI.Controllers
{
    [Route("[controller]")]
    public class AccountController: ControllerBase
    {
        private IAccountService _service;
        public AccountController(IAccountService serv)
        {
            _service = serv;
        }

        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser([FromBody] User item)
        {
            try
            {
                _service.AddUser(item);
                return Ok();
            }
            catch(Exception ex){
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("UpdateUser")]
        public IActionResult UpdateUser([FromBody] User item)
        {
            try
            {
                _service.Update(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("IsUserName/{username}")]
        public IActionResult ValidUser(string username)
        {
            try
            {
                //service.Update(item);
                if (_service.IsUserName(username))
                {
                    return Ok("Valid");
                }
                else return Ok("InValid");
                
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("GetUser/{uid}")]
        public IActionResult GetUser(int uid)
        {
            try
            {
                User obj = _service.GetUserById(uid);
                return Ok(obj);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("AllUser")]
        public IActionResult GetAllUsers()
        {
            try
            {
                IEnumerable<User> users = _service.GetAllUsers();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("DeleteUser")]
        public IActionResult DeleteUser([FromBody] User user)
        {
            try
            {
                _service.Delete(user);
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
                User useTest = _service.Validate(uname, pwd);
                if (useTest == null)
                {
                    return Ok("Falsee");
                }
                else
                {
                    return Ok("Truee");
                }
            }
            catch(Exception ex)
            {
                return StatusCode(700, ex.Message);
            }
        }

    }
}