using backend.DatabaseContexts;
using backend.DTOs.ProfileCompany;

using backend.Services.ProfileCompanyServices;

using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileCompanyController : ControllerBase
    {
        private readonly RadioCabsContext _context;
        private readonly IProfileCompanycs _profileCompanycs;
        public ProfileCompanyController(RadioCabsContext context, IProfileCompanycs profileCompanycs)
        {
            _context = context;
            _profileCompanycs = profileCompanycs;
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] ProfileCompanyCreateDto dto)
        {
            var companyId = await GetCompanyId(HttpContext);
            var ProfileToReturn = await _profileCompanycs.Create(dto, companyId);

            return Created("", ProfileToReturn);
        }
        private async Task<int> GetCompanyId(HttpContext httpContext)
        {
            var email = HttpContext.User.Identity!.Name; // lay username tu trong jwt
            var companyId = (await _context.Companies
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.Email == email) ?? throw new Exception()).Id;
            return companyId;
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetProfileDetail([FromRoute] int id)
        {
            var profile = await _context.ProfileCompanies.FindAsync(id);
            if (profile is null) return NotFound();
            var profileDetailToReturn = await _profileCompanycs.GetProfileDetailAsync(id);
            return Ok(profileDetailToReturn);
        }
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAllProfile()
        {
            var comapnyId = await GetCompanyId(HttpContext);
            var profilesToReturn = await _profileCompanycs.GetAllProfile(comapnyId);
            return Ok(profilesToReturn);
        }
        [HttpGet("all/companies")]
        public async Task<IActionResult> GetAllProfileToClient()
        {
            var profilesToReturn = await _profileCompanycs.GetAllProfileToClinet();
            return Ok(profilesToReturn);
        }
    }
}
