using backend.DTOs.Member;

namespace backend.Services.MemberServices
{
    public interface IMemberServices
    {
        Task<MemberCreateDto> CreateMember(MemberCreateDto dto);
    }
}
