using backend.DatabaseContexts;
using backend.DTOs.Member;
using backend.DTOs.Sex;
using backend.Entities;

namespace backend.Services.SexService
{
    public class SexServices :ISexServices
    {
        private readonly RadioCabsContext _radioCabsContext;
        public SexServices(RadioCabsContext radioCabsContext)
        {
            _radioCabsContext = radioCabsContext;
        }
        public async Task<SexCreateDto> CreateSex(SexCreateDto dto)
        {
            var SexToCreate = new Sex { Name = dto.Name };
            _radioCabsContext.Sexes.Add(SexToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return dto;
        }
    }
}
