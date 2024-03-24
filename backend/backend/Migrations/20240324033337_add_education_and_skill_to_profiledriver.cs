using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RadioCabsBackEnd.Migrations
{
    /// <inheritdoc />
    public partial class add_education_and_skill_to_profiledriver : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Education",
                table: "ProfileDrivers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Skill",
                table: "ProfileDrivers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Education",
                table: "ProfileDrivers");

            migrationBuilder.DropColumn(
                name: "Skill",
                table: "ProfileDrivers");
        }
    }
}
