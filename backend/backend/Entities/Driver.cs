using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class Driver
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public required string DriverName { get; set; }
        [Required]
        public required string ContactPerson { get; set; }
        [Required]
        public required string Address { get; set; }
        [Required]
        public required string City { get; set; }
        [Required]
        public required string Mobile { get; set; }
        [Required]
        public required string Telephone { get; set; }
        [Required]
        public required string Email { get; set;}
        [Required]
        public required int Experience { get; set;}
        [Required]

        public required string Description { get; set;}
     /*   [ForeignKey(nameof(Role))]
        public required int RoleId { get; set; }
        public Role? Role { get; set; }*/
        public required string Password { get; set; }
        public required string Salt { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }

    }
}
