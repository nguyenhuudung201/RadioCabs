using System.Data.Common;
using backend.Entities;
using Microsoft.EntityFrameworkCore;
namespace backend.DatabaseContexts
{
    public class RadioCabsContext : DbContext

    {
        public RadioCabsContext(DbContextOptions dbContextOptions):base(dbContextOptions)
        {
        }
        public required DbSet<Company> Companies { get; set; }
        public required DbSet<Driver> Drivers { get; set; }
        public required DbSet<Member> Members { get; set; }
        public required DbSet<Sex> Sexes { get; set; }
        public required DbSet<Marital> Maritals { get; set; }
        public required DbSet<ProfileDriver> ProfileDrivers { get; set; }
        public required DbSet<ProfileCompany> ProfileCompanies { get; set; }
        public required DbSet<Roles> Roles { get; set; }
    }
}
