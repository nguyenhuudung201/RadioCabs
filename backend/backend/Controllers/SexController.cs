using backend.DatabaseContexts;
using backend.DTOs.Member;
using backend.DTOs.Sex;
using backend.Services.MemberServices;
using backend.Services.SexService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SexController : ControllerBase
    {
        private readonly RadioCabsContext _radioCabsContext;
        private readonly ISexServices _sexServices;

        public SexController(RadioCabsContext radioCabsContext, ISexServices sexServices)
        {
            _radioCabsContext = radioCabsContext;
            _sexServices = sexServices;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] SexCreateDto dto)
        {
            var SexToReturn = await _sexServices.CreateSex(dto);
            return Created("", SexToReturn);
        }
    }
}
