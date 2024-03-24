using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RadioCabsBackEnd.Migrations
{
    /// <inheritdoc />
    public partial class add_services_profilecompany : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Services",
                table: "ProfileCompanies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Services",
                table: "ProfileCompanies");
        }
    }
}
