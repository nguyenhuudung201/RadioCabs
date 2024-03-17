namespace backend.DTOs.ProfileDrive
{
    public class ProfileDriverUpdateDto
    {
        public DateOnly? DateOfBirth { get; set; }
        public required IFormFile Image { get; set; }
        public required int SexId { get; set; }
        public required int MaritalId { get; set; }
    }
}
