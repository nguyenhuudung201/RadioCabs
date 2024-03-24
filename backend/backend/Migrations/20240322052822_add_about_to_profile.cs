using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RadioCabsBackEnd.Migrations
{
    /// <inheritdoc />
    public partial class add_about_to_profile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "About",
                table: "ProfileDrivers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "About",
                table: "ProfileCompanies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "About",
                table: "ProfileDrivers");

            migrationBuilder.DropColumn(
                name: "About",
                table: "ProfileCompanies");
        }
    }
}
