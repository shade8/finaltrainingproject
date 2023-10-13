using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserAPI.Data;

namespace UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("checkusername/{username}")]
        public async Task<IActionResult> CheckUsernameExists(string username)
        {
            var userExists = await _context.Users.AnyAsync(u => u.Username == username);
            return Ok(userExists);
        }

    }
}
