using backend.DatabaseContexts;
using backend.DTOs.ProfileDrive;
using backend.Services.ProfileDriverServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileDriverController : ControllerBase
    {
        private readonly RadioCabsContext _context;
        private readonly IProfileDriverServices _profileDriverServices;
        public ProfileDriverController(RadioCabsContext context, IProfileDriverServices profileDriverServices)
        {
            _context = context;
            _profileDriverServices = profileDriverServices;
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] ProfileToCreate dto)
        {
            var userId = await GetUserId(HttpContext);
            var ProfileToReturn = await _profileDriverServices.CreateProfile(dto, userId);

            return Created("", ProfileToReturn);
        }
        private async Task<int> GetUserId(HttpContext httpContext)
        {
            var email = HttpContext.User.Identity!.Name; // lay username tu trong jwt
            var userId = (await _context.Drivers
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.Email == email) ?? throw new Exception()).Id;
            return userId;
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetProfileDetail([FromRoute] int id)
        {
            var profile = await _context.ProfileDrivers.FindAsync(id);
            if (profile is null) return NotFound();
            var profileDetailToReturn = await _profileDriverServices.GetProfileDetailAsync(id);
            return Ok(profileDetailToReturn);
        }
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAllProfile()
        {
            var userId = await GetUserId(HttpContext);
            var profilesToReturn = await _profileDriverServices.GetAllProfile(userId);
            return Ok(profilesToReturn);
        }
        [Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateProfile([FromForm] ProfileDriverUpdateDto dto, [FromRoute] int profileId)
        {
            await _profileDriverServices.UpdateProfile(dto,profileId);
            return NoContent();
        }
    }
}
