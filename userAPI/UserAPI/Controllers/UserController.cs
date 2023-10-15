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

        [HttpPost("checkuser")]
        public async Task<IActionResult> CheckUser([FromBody] LoginRequest loginRequest)
        {
            string username = loginRequest.Username;
            string password = loginRequest.Password;

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Name == username && u.Password == password);

            if (user != null)
            {
                
                return Ok(user);
            }

            
            return NotFound();
        }

    }
}
