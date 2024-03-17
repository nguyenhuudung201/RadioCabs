﻿using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.Login
{
    public class LoginDto
    {
        [Required]
        public required string Email { get; set; }

        [Required]
        public required string Password { get; set; }
    }
}
