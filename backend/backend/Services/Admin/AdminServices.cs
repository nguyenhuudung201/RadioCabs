using backend.DatabaseContexts;
using backend.DTOs.ProfileCompany;

using Microsoft.EntityFrameworkCore;
using RadioCabsBackEnd.DTOs.Admin;



namespace RadioCabsBackEnd.Services.Admin
{
    public class AdminServices:IAdminServices
    {
        private readonly RadioCabsContext _radioCabsContext;
        public AdminServices(RadioCabsContext radioCabsContext)
        {
            _radioCabsContext = radioCabsContext;
        }
        public async Task<IEnumerable<ProfileCompanyGetAllDto>> GetAllProfileList()
        {
            var profileList = await _radioCabsContext.ProfileCompanies.
                AsNoTracking().
                Include(p => p.Company)
                .ToListAsync();
            var profileListsToReturn = profileList.Select(p => new ProfileCompanyGetAllDto
            {
                Id= p.Id,
                Name=p.Company.CompanyName,
                Description=p.Description,
                Image=p.Image,
                
            });
            return profileListsToReturn;
        }
    }
}
