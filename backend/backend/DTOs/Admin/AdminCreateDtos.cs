﻿namespace RadioCabsBackEnd.DTOs.Admin
{
    public class AdminCreateDtos
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
     
        public required int RoleId { get; set; }
    }
}
