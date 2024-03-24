namespace RadioCabsBackEnd.DTOs.ProfileCompany
{
    public class ProfileCompanyUpdateDto
    {
        public DateTime DateOfBirth { get; set; }
        public required int CompanyId { get; set; }
        public required IFormFile Image { get; set; }
        public required string Description { get; set; }
        public required string About { get; set; }
        public required string Services { get; set; }
    }
}
