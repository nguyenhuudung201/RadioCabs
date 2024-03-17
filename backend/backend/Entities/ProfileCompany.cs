using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class ProfileCompany
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [NotMapped]
        public DateOnly DateOfBirth { get; set; }
        
        [Required]
        [ForeignKey(nameof(Company))]
        public required int CompanyId { get; set; }
        public Company? Company { get; set; }
        [Required]
        public required string Image { get; set; }
        [Required]
        public required string Description { get; set; }
    }
}
