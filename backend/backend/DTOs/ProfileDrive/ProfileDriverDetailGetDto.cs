namespace backend.DTOs.ProfileDrive
{
    public class ProfileDriverDetailGetDto
    {
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required string About { get; set; }
        public required string Email { get; set;}
        public required string PhoneNumber { get; set; }
        public required string TelePhone { get; set; }
        public required int Experience { get; set; }
        public required string City { get; set; }
        public required string Address { get; set; }
        public required string ContactPerson { get; set; }
        public DateTime DateOfBirth { get; set; }
        public required int SexId { get; set; }
        public required string Sex { get; set; }
        public required string Marital { get; set; }
        public required string Image { get; set; }
        public required int MaritalId { get; set; }
        public required string Education { get; set; }
        public required string Skill { get; set; }

    }
}
