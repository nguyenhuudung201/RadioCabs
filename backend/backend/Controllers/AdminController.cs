using backend.DatabaseContexts;
using backend.Services.TokenService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RadioCabsBackEnd.Services.Admin;

namespace RadioCabsBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly RadioCabsContext _radioCabsContext;
        private readonly  IAdminServices _adminServices;
        public AdminController(RadioCabsContext radioCabsContext, IAdminServices adminServices)
        {
            _radioCabsContext = radioCabsContext;
            _adminServices = adminServices;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProfile()
        {
         
            var profilesToReturn = await _adminServices.GetAllProfileList();
            return Ok(profilesToReturn);
        }
    }
}
