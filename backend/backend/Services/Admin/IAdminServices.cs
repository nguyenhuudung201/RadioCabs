using backend.DTOs.ProfileCompany;

namespace RadioCabsBackEnd.Services.Admin
{
    public interface IAdminServices
    {
        Task<IEnumerable<ProfileCompanyGetAllDto>> GetAllProfileList();
    }
}
