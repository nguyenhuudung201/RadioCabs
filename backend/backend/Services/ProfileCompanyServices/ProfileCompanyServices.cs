using backend.DatabaseContexts;
using backend.DTOs.ProfileCompany;
using backend.DTOs.ProfileDrive;
using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.ProfileCompanyServices
{
    public class ProfileCompanyServices:IProfileCompanycs
    {
        private readonly RadioCabsContext _radioCabsContext;
        public ProfileCompanyServices(RadioCabsContext radioCabsContext)
        {
            _radioCabsContext = radioCabsContext;
        }
        public async Task<ProfileCompanyCreateDto> Create(ProfileCompanyCreateDto dto, int companyId)
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/companies");
            FileInfo fileInfo = new FileInfo(dto.Image.FileName);
            string fileName = "comapny_driver_image_" + DateTimeOffset.Now.ToUnixTimeMilliseconds().ToString() + fileInfo.Extension;
            string fileNameWithPath = Path.Combine(path, fileName);

            using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
            {
                dto.Image.CopyTo(stream);
            }
            var ProfileToCreate = new ProfileCompany
            {
                Description = dto.Description,
                DateOfBirth = dto.DateOfBirth,
                Image = $"/images/companies/{fileName}",
                CompanyId = companyId,
            };
            _radioCabsContext.ProfileCompanies.Add(ProfileToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return dto;
        }
        public async Task<ProfileCompanyDetailDto> GetProfileDetailAsync(int profileId)
        {
            var profile = await _radioCabsContext.ProfileCompanies.
                AsNoTracking().
                Include(p => p.Company)
                .Where(p => p.Id == profileId)
                .SingleOrDefaultAsync();
            var profileCompanyToReturn = new ProfileCompanyDetailDto
            {
                Id = profileId,
                CompanyName=profile.Company!.CompanyName,
                Fax = profile.Company!.Fax,
                Email = profile.Company!.Email,
                Address = profile.Company!.Address,
                ContactPerson = profile.Company!.ContactPerson,
                Designation = profile.Company!.Designation,
                Telephone = profile.Company!.Telephone,
                Mobile = profile.Company!.Mobile,
                Image=profile.Image,
                Description=profile.Description,
                DateOfBirth=profile.DateOfBirth,

            };
            return profileCompanyToReturn;
        }
        public async Task<IEnumerable<ProfileCompanyGetAllDto>> GetAllProfile(int companyId)
        {
            var profileList = await _radioCabsContext.ProfileCompanies.
                AsNoTracking().
                Include(p => p.Company).Where(p => p.CompanyId == companyId).ToListAsync();
            var profilesToReturn = profileList.Select(p => new ProfileCompanyGetAllDto
            {
                Id = p.Id,
                Image = p.Image,
                Name = p.Company!.CompanyName,
                Description = p.Description
            });
            return profilesToReturn;
        }
    }
}
