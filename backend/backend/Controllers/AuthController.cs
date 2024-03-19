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
                RoleId = 1,
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
                RoleId=2,
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
            var email = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value; // lay username tu trong jwt
           return Ok(email);
        }
    }
}
