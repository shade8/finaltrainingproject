using Microsoft.EntityFrameworkCore;

namespace UserAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users => Set<User>();
        public DbSet<Hotel> Hotels => Set<Hotel>();
        public DbSet<Booking> Bookings => Set<Booking>();
    }
}
