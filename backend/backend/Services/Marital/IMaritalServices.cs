using backend.DTOs.Marital;

namespace backend.Services.Marital
{
    public interface IMaritalServices
    {
        Task<MaritalCreateDto> CreateMarital(MaritalCreateDto dto);
    }
}
