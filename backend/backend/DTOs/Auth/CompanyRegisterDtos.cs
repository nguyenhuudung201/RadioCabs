namespace backend.DTOs.Auth
{
    public class CompanyRegisterDtos
    {
        public required string CompanyName { get; set; }
        public required string CompanyEmail { get; set;}
        public required  string CompanyPassword { get; set;}
        public required string CompanyPhone { get; set;}
        public required string Designation { get; set; }
        public required string CompanyTelephone { get; set; }
        public required string Address { get; set; }
        public required string ContactPerson { get; set; }
        public required string Fax { get; set; }
        public required int MemberId { get; set; }
        public required int RoleId { get; set; }
    }
}
