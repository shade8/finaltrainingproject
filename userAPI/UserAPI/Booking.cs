namespace UserAPI
{
    public class Booking
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Hotel { get; set; } = string.Empty;
        public string Duration { get; set; } = string.Empty;
        public string PhoneNo { get; set; } = string.Empty;
        public string EmailId { get; set; } = string.Empty;
    }
}