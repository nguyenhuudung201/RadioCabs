using backend.DatabaseContexts;
using backend.DTOs.ProfileCompany;
using backend.Services.ProfileCompanyServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RadioCabsBackEnd.DTOs.Advertise;
using RadioCabsBackEnd.Services.Advertise;

namespace RadioCabsBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertiseController : ControllerBase
    {
        private readonly RadioCabsContext _context;
        private readonly IAdvertiseServices _advertiseServices;
        public AdvertiseController(RadioCabsContext context, IAdvertiseServices advertiseServices)
        {
            _context = context;
            _advertiseServices = advertiseServices;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] AdvertiseCreateDto dto)
        {
            var AdvertiseToReturn = await _advertiseServices.Create(dto);
            return Created("", AdvertiseToReturn);
        }
        [HttpGet("{advertiseId:int}")]
        public async Task<IActionResult> GetAdvertiseDetail([FromRoute] int advertiseId )
        {
            var AdvertiseDetailReturn = await _advertiseServices.GetAdvertiseDetailAsync(advertiseId);
            return Created("", AdvertiseDetailReturn);
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProfile()
        {
            var AdvertiseList = await _advertiseServices.GetAllAdvertise();
            return Ok(AdvertiseList);
        }
    }
}
