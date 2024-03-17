using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.Marital
{
    public class MaritalCreateDto
    {
        [Required]
        public required string Name { get; set; }
    }
}
