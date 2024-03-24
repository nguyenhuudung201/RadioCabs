using System.ComponentModel.DataAnnotations.Schema;

namespace backend.DTOs.ProfileCompany
{
    public class ProfileCompanyCreateDto
    {
     
        public DateTime DateOfBirth { get; set; }
        public required int CompanyId { get; set; }
        public required IFormFile Image { get; set; }
        public required string Description { get; set; }
        public required string About { get; set; }
        public required string Services { get; set; }
    }
}
