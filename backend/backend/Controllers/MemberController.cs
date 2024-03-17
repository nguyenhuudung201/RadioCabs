using backend.DatabaseContexts;
using backend.DTOs.Member;
using backend.Services.MemberServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private readonly RadioCabsContext _radioCabsContext;
        private readonly IMemberServices _memberServices;

        public MemberController( RadioCabsContext radioCabsContext,IMemberServices memberServices) {
            _radioCabsContext = radioCabsContext;
            _memberServices = memberServices;
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] MemberCreateDto dto)
        {
            var MemberToReturn = await _memberServices.CreateMember(dto);
            return Created("", MemberToReturn);
        }
    }
}
