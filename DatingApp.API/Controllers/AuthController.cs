using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dto;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Result(UserForRegister userForRegister )
        {
         
            userForRegister.Username = userForRegister.Username.ToLower();
            if (await _repo.UserExists( userForRegister.Username))
                return BadRequest("Username already exist");
            var userToCreate = new User
            {
                Username =  userForRegister.Username.ToLower()
            };
            var ceateUser = await _repo.Register(userToCreate,  userForRegister.Password);
            return StatusCode(201);
        }
    }
}