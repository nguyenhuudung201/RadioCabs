namespace backend.DTOs.ProfileDrive
{
    public class ProfileDriverUpdateDto
    {
        public DateTime DateOfBirth { get; set; }
        public required IFormFile Image { get; set; }
        public required int SexId { get; set; }
        public required int MaritalId { get; set; }
        public required string About { get; set; }
        public required string Education { get; set; }
        public required string Skill { get; set; }
    }
}
