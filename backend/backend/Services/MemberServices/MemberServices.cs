using backend.DatabaseContexts;
using backend.DTOs.Member;
using backend.Entities;

namespace backend.Services.MemberServices
{
    public class MemberServices : IMemberServices
    {
        private readonly RadioCabsContext _radioCabsContext;
        public MemberServices(RadioCabsContext radioCabsContext)
        {
             _radioCabsContext=radioCabsContext;
        }
        public async Task<MemberCreateDto> CreateMember(MemberCreateDto dto)
        {
            var MemberToCreate = new Member { Name = dto.Name };
            _radioCabsContext.Members.Add(MemberToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return dto;
        }
    }
}
