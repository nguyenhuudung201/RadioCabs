using backend.DTOs.ProfileCompany;

namespace backend.Services.ProfileCompanyServices
{
    public interface IProfileCompanycs
    {
        Task<ProfileCompanyCreateDto> Create (ProfileCompanyCreateDto dto,int companyId);
        Task<ProfileCompanyDetailDto> GetProfileDetailAsync(int profileId);
        Task<IEnumerable<ProfileCompanyGetAllDto>> GetAllProfile(int companyId);
    }
}
