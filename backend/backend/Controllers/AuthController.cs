using backend.DatabaseContexts;
using backend.DTOs.Auth;
using backend.DTOs.Login;
using backend.Entities;
using backend.Helpers;
using backend.Model;
using backend.Services.TokenService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RadioCabsBackEnd.DTOs.Admin;
using RadioCabsBackEnd.DTOs.ProfileCompany;
using RadioCabsBackEnd.DTOs.ProfileDrive;
using RadioCabsBackEnd.Entities;
using System.Security.Claims;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly RadioCabsContext _radioCabsContext;
        private readonly ITokenService _tokenService;
        public AuthController(RadioCabsContext radioCabsContext,ITokenService tokenService)
        {
            _radioCabsContext= radioCabsContext;
            _tokenService= tokenService;
        }
        [HttpPost, Route("login/company")]
        public async Task<IActionResult> CompanyLogin([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            var company = await _radioCabsContext.Companies.FirstOrDefaultAsync(c => c.Email.ToUpper().Equals(dto.Email.ToUpper()));
            if (company is null)
            {
                return Unauthorized();
            }
            if (!PasswordHelper.VerifyPasswordCompany(company, dto.Password))
            {
                
                return Unauthorized();
            }
            var claims = new List<Claim>
            {
             new Claim(ClaimTypes.Name, company.Email),
               
            };
            var accessToken = _tokenService.GenerateAccessToken(claims);
            var refreshToken = _tokenService.GenerateRefreshToken();

            company.RefreshToken = refreshToken;
            company.RefreshTokenExpiryTime = DateTime.Now.AddDays(7);

            _radioCabsContext.SaveChanges();

            return Ok(new AuthenticatedResponse { Token = accessToken, RefreshToken = refreshToken });
        }

        [HttpPost("register/company")]
        public async Task<IActionResult> RegisterCompany([FromBody] CompanyRegisterDtos dtos)
        {
            // Kiem tra modelstate
            if (!ModelState.IsValid)
                return BadRequest();

            // Kiem tra xem username va password co trung khong
            var company = await _radioCabsContext.Companies.FirstOrDefaultAsync(c=>c.Email.ToUpper().Equals(dtos.CompanyEmail.ToUpper()));
            // Neu bi trung, tra ve 409
            if (company is not null)
                return Conflict("Email already exists.");
            string salt="";
            var companyToCreate = new Company
            {
                CompanyName = dtos.CompanyName,
                Address = dtos.Address,
                ContactPerson = dtos.ContactPerson,
                Designation = dtos.Designation,
                Email = dtos.CompanyEmail,
                Mobile = dtos.CompanyPhone,
                Telephone = dtos.CompanyTelephone,
                Fax = dtos.Fax,
                Password = PasswordHelper.HashPassword(dtos.CompanyPassword, out salt),
                MemberId = dtos.MemberId,
                RoleId = dtos.RoleId,
                Salt = salt,
            };
            _radioCabsContext.Companies.Add(companyToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return Accepted();
        }
        [HttpPost("register/driver")]
        public async Task<IActionResult> RegisterDriver([FromBody] DriverRegisterDtos dtos)
        {
            // Kiem tra modelstate
            if (!ModelState.IsValid)
                return BadRequest();

            // Kiem tra xem username va password co trung khong
            var driver = await _radioCabsContext.Drivers.FirstOrDefaultAsync(d => d.Email.ToUpper().Equals(dtos.Email.ToUpper()));
            // Neu bi trung, tra ve 409
            if (driver is not null)
                return Conflict("Email  already exists.");
            string salt = "";
            var driverToCreate = new Driver
            {
                DriverName=dtos.DriverName,
                Address=dtos.Address,
                ContactPerson = dtos.ContactPerson,
                Email=dtos.Email,
                City=dtos.City,
                Description=dtos.Description,
                Experience=dtos.Experience,
                Password=PasswordHelper.HashPassword(dtos.Password,out salt),
                Mobile=dtos.Mobile,
                Telephone=dtos.Telephone,
                RoleId=dtos.RoleId,
                Salt = salt,
            };
            _radioCabsContext.Drivers.Add(driverToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return Accepted();
        }
        [HttpPost, Route("login/driver")]
        public async Task<IActionResult> DriverLogin([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            var driver = await _radioCabsContext.Drivers.FirstOrDefaultAsync(c => c.Email.ToUpper().Equals(dto.Email.ToUpper()));
            if (driver is null)
            {
                return Unauthorized();
            }
            if (!PasswordHelper.VerifyPasswordDriver(driver, dto.Password))
            {

                return Unauthorized();
            }
            var claims = new List<Claim>
            {
             new Claim(ClaimTypes.Name, driver.Email),

            };
            var accessToken = _tokenService.GenerateAccessToken(claims);
            var refreshToken = _tokenService.GenerateRefreshToken();

            driver.RefreshToken = refreshToken;
            driver.RefreshTokenExpiryTime = DateTime.Now.AddDays(7);

            _radioCabsContext.SaveChanges();

            return Ok(new AuthenticatedResponse { Token = accessToken, RefreshToken = refreshToken });
        }

        [Authorize]
        [HttpGet("comapny")]
        public async Task<IActionResult> GetCurrentCompany()
        {
            var username = HttpContext.User.Identity!.Name; // lay username tu trong jwt
            var user = await _radioCabsContext.Companies.FirstOrDefaultAsync(u => u.Email.ToUpper().Equals(username!.ToUpper()));
            var userGetDto = new CompanyGetDto
            { 
                RoleId = user!.RoleId
            };
            return Ok(userGetDto);
        }
        [Authorize]
        [HttpGet("driver")]
        public async Task<IActionResult> GetCurrentDriver()
        {
            var username = HttpContext.User.Identity!.Name; // lay username tu trong jwt
            var user = await _radioCabsContext.Drivers.FirstOrDefaultAsync(u => u.Email.ToUpper().Equals(username!.ToUpper()));
            var driverGetDto = new DriverGetDto
            {
                RoleId = user!.RoleId
            };
            return Ok(driverGetDto);
        }
        [HttpPost("register/admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] AdminCreateDtos dtos)
        {
            // Kiem tra modelstate
            if (!ModelState.IsValid)
                return BadRequest();

            // Kiem tra xem username va password co trung khong
            var admin = await _radioCabsContext.Admins.FirstOrDefaultAsync(d => d.Email.ToUpper().Equals(dtos.Email.ToUpper()));
            // Neu bi trung, tra ve 409
            if (admin is not null)
                return Conflict("Email  already exists.");
            string salt = "";
            var adminToCreate = new Admin
            {
                Name=dtos.Name,
                Email = dtos.Email,
                
                Password = PasswordHelper.HashPassword(dtos.Password, out salt),
                RoleId = dtos.RoleId,
                Salt = salt,
            };
            _radioCabsContext.Admins.Add(adminToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return Accepted();
        }
        [HttpPost, Route("login/admin")]
        public async Task<IActionResult> AdminLogin([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            var admin = await _radioCabsContext.Admins.FirstOrDefaultAsync(c => c.Email.ToUpper().Equals(dto.Email.ToUpper()));
            if (admin is null)
            {
                return Unauthorized();
            }
            if (!PasswordHelper.VerifyPasswordAdmin(admin, dto.Password))
            {

                return Unauthorized();
            }
            var claims = new List<Claim>
            {
             new Claim(ClaimTypes.Name, admin.Email),

            };
            var accessToken = _tokenService.GenerateAccessToken(claims);
            var refreshToken = _tokenService.GenerateRefreshToken();

            admin.RefreshToken = refreshToken;
            admin.RefreshTokenExpiryTime = DateTime.Now.AddDays(7);

            _radioCabsContext.SaveChanges();

            return Ok(new AuthenticatedResponse { Token = accessToken, RefreshToken = refreshToken });
        }
        [Authorize]
        [HttpGet("admin")]
        public async Task<IActionResult> GetCurrentAdmin()
        {
            var username = HttpContext.User.Identity!.Name; // lay username tu trong jwt
            var user = await _radioCabsContext.Admins.FirstOrDefaultAsync(u => u.Email.ToUpper().Equals(username!.ToUpper()));
            var driverGetDto = new DriverGetDto
            {
                RoleId = user!.RoleId
            };
            return Ok(driverGetDto);
        }
    }
}
