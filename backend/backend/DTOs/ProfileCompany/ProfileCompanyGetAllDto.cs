namespace backend.DTOs.ProfileCompany
{
    public class ProfileCompanyGetAllDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Image { get; set; }
        public required string Description { get; set; }
    }
}
