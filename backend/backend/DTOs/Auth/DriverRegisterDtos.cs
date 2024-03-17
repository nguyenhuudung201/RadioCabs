namespace backend.DTOs.Auth
{
    public class DriverRegisterDtos
    {
        public required string DriverName { get; set; }
        public required string ContactPerson { get; set; }
        public required string Address { get; set; }
        public required string City { get; set; }
        public required string Mobile { get; set; }
        public required string Telephone { get; set; }
        public required int Experience { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Description { get; set; }
        public required int RoleId { get; set; }
    }
}
