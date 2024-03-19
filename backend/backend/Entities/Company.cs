using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace backend.Entities
{
    public class Company
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public required string CompanyName { get; set; }
        [Required]
        public required string ContactPerson { get; set;}
        [Required]
        public required string Designation { get; set;}
        [Required]
        public required string Address { get; set;}
        [Required]
        public required string Mobile { get; set;}
        [Required]
        public required string Telephone { get; set;}
        [Required]
        public required string Fax { get; set;}
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string Password { get; set; }
        [ForeignKey(nameof(Member))]
        public required int MemberId { get; set; }
        public Member? Member { get; set; }

        [ForeignKey(nameof(Roles))]
        public required int RoleId { get; set; }
        public Roles? Role { get; set; }

        public required string Salt { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }

    }
}
