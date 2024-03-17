using backend.DTOs.Member;
using backend.DTOs.Sex;

namespace backend.Services.SexService
{
    public interface ISexServices
    {
        Task<SexCreateDto> CreateSex(SexCreateDto dto);
    }
}
