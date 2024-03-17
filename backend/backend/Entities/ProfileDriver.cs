using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class ProfileDriver
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [NotMapped]
        public DateOnly? DateOfBirth { get; set; }
        [Required]
        [ForeignKey(nameof(Sex))]
        public required int SexId { get; set; }
        public Sex? Sex { get; set; }
        [Required]
        [ForeignKey(nameof(Marital))]
        public required int MaritalId { get; set; } 
        public Marital? Marital { get; set; }
        [Required]
        [ForeignKey(nameof(Driver))]
        public required int DriverId { get; set; }
        public Driver? Driver { get; set; }
        [Required]
        public required string Image { get; set; }
    }
}
