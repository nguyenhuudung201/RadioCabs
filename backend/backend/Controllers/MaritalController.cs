using backend.DatabaseContexts;
using backend.DTOs.Marital;
using backend.DTOs.Sex;
using backend.Services.Marital;
using backend.Services.SexService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaritalController : ControllerBase
    {
        private readonly RadioCabsContext _radioCabsContext;
        private readonly IMaritalServices _maritalServices;

        public MaritalController(RadioCabsContext radioCabsContext, IMaritalServices maritalServices)
        {
            _radioCabsContext = radioCabsContext;
            _maritalServices = maritalServices;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] MaritalCreateDto dto)
        {
            var MaritalToReturn = await _maritalServices.CreateMarital(dto);
            return Created("", MaritalToReturn);
        }
    }
}
