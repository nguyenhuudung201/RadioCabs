using backend.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RadioCabsBackEnd.Entities
{
    public class Advertise
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public required string CompanyName { get; set; }
        [Required]
        public required string Designation { get; set; }
        [Required]
        public required string Address { get; set; }
        [Required]
        public required string Mobile { get; set; }
        [Required]
        public required string Telephone { get; set; }
        [Required]
        public required string Fax { get; set; }
        [Required]
        public required string Image { get; set; }
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string Password { get; set; }
        [Required]
        public required string Description { get; set; }
        [ForeignKey(nameof(Roles))]
        public required int RoleId { get; set; }
        public Roles? Role { get; set; }
    }
}
