using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserAPI.Data;

namespace UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly DataContext _context;

        public BookingController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{email}")]
        public async Task<ActionResult<List<Booking>>> GetBookings(string email)
        {
            var bookings = await _context.Bookings
                .Where(booking => booking.EmailId == email)
                .ToListAsync();

            return Ok(bookings);
        }

        [HttpPost]
        public async Task<ActionResult<List<Booking>>> CreateBooking(Booking booking)
        {
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return Ok(booking);
        }

    }
}