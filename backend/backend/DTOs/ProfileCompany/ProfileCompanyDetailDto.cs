namespace backend.DTOs.ProfileCompany
{
    public class ProfileCompanyDetailDto
    {
        public int Id { get; set; }
        public required string CompanyName { get; set; }
        public required string ContactPerson { get; set; }
        public required string Designation { get; set; }
        public required string Address { get; set; }
        public required string Telephone { get; set; }
        public required string Mobile { get; set; }
        public required string Fax { get; set; }
        public required string Email { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public required string Image { get; set; }
        public required string Description { get; set; }
    }
}
