using System.ComponentModel.DataAnnotations;

namespace RadioCabsBackEnd.DTOs.Advertise
{
    public class AdvertiseCreateDto
    {
        public required string CompanyName { get; set; }
        public required string Email { get; set; }
        public required string Mobile { get; set; }
     
        public required string Designation { get; set; }
        public required string Telephone { get; set; }
        public required string Address { get; set; }
        public required string Description { get; set; }
        public required string Password { get; set; }
        public required string Fax { get; set; }
     
        public required IFormFile Image { get; set; }
        public required int RoleId { get; set; }
    }
}
