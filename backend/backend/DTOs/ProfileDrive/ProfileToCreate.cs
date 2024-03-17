namespace backend.DTOs.ProfileDrive
{
    public class ProfileToCreate
    {
        public DateOnly? DateOfBirth { get; set; }
        public required int SexId { get; set; }
        public required int MaritalId { get; set; }
      
        public required IFormFile Image { get; set; }
    }
}
