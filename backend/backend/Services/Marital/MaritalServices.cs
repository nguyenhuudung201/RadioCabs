using backend.DatabaseContexts;
using backend.DTOs.Marital;
using backend.Entities;

namespace backend.Services.Marital
{
    public class MaritalServices:IMaritalServices
    {
        private readonly RadioCabsContext _radioCabsContext;
        public MaritalServices(RadioCabsContext radioCabsContext)
        {
            _radioCabsContext = radioCabsContext;
        }
        public async Task<MaritalCreateDto> CreateMarital(MaritalCreateDto dto)
        {
            var MaritalToCreate = new Entities.Marital { Name = dto.Name };
            _radioCabsContext.Maritals.Add(MaritalToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return dto;
        }
    }
}
