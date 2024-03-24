using backend.DatabaseContexts;
using backend.DTOs.Member;
using backend.DTOs.ProfileDrive;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.ProfileDriverServices
{
    public class ProfileDriverServices :IProfileDriverServices
    {
        private readonly RadioCabsContext _radioCabsContext;
        public ProfileDriverServices(RadioCabsContext radioCabsContext)
        {
            _radioCabsContext = radioCabsContext;
        }
        public async Task<ProfileToCreate> CreateProfile(ProfileToCreate dto,int driverId)
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/driver");
            FileInfo fileInfo = new FileInfo(dto.Image.FileName);
            string fileName = "profile_driver_image_" + DateTimeOffset.Now.ToUnixTimeMilliseconds().ToString() + fileInfo.Extension;
            string fileNameWithPath = Path.Combine(path, fileName);

            using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
            {
                dto.Image.CopyTo(stream);
            }
            var ProfileToCreate = new ProfileDriver {
                SexId=dto.SexId,
                MaritalId=dto.MaritalId,
                DateOfBirth=dto.DateOfBirth,
                Image = $"/images/driver/{fileName}",
                DriverId=driverId,
                About=dto.About,
                Education=dto.Education,
                Skill=dto.Skill
                
            };
            _radioCabsContext.ProfileDrivers.Add(ProfileToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return dto;
        }
        public async Task<ProfileDriverDetailGetDto> GetProfileDetailAsync(int profileId)
        {
            var profile = await _radioCabsContext.ProfileDrivers.
                AsNoTracking().
                Include(p=>p.Driver).
                Include(p=>p.Sex).
                Include(p=>p.Marital)
                .Where(p=>p.Id==profileId)
                .SingleOrDefaultAsync();
            var profileDriverToReturn = new ProfileDriverDetailGetDto
            {
                Id = profileId,
                Address = profile!.Driver!.Address,
                City = profile!.Driver!.City,
                Email = profile!.Driver!.Email,
                Experience = profile!.Driver!.Experience,
                ContactPerson = profile!.Driver!.ContactPerson,
                Description = profile!.Driver!.Description,
                Name = profile!.Driver!.DriverName,
                PhoneNumber = profile!.Driver!.Telephone,
                TelePhone = profile!.Driver!.Telephone,
                SexId = profile.SexId,
                Sex=profile.Sex!.Name,
                Image = profile.Image,
                About=profile.About,
                MaritalId = profile.MaritalId,
                Marital = profile.Marital!.Name,
                DateOfBirth = profile.DateOfBirth,
                Education=profile.Education,
                Skill=profile.Skill,

            };
            return profileDriverToReturn;
        }
        public async Task UpdateProfile(ProfileDriverUpdateDto dto, int profileId)
        {
            var user = await _radioCabsContext.ProfileDrivers.FindAsync(profileId) ?? throw new ArgumentException(null, nameof(profileId));
      /*      string filePath = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot/images/driver{user.Image}");
            System.IO.File.Delete(filePath);*/

            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/driver");
            FileInfo fileInfo = new FileInfo(dto.Image.FileName);

            string fileName = "profile_driver_image_" + DateTimeOffset.Now.ToUnixTimeMilliseconds().ToString() + fileInfo.Extension;
            string fileNameWithPath = Path.Combine(path, fileName);

            using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
            {
                dto.Image.CopyTo(stream);
            }

            user.MaritalId = dto.MaritalId;
            user.SexId = dto.SexId;
            user.DateOfBirth = dto.DateOfBirth;
            user.Image = $"/images/driver/{fileName}";
            user.About = dto.About;
            user.Education = dto.Education;
            user.Skill = dto.Skill;
            await _radioCabsContext.SaveChangesAsync();
        }
        
        public async Task<IEnumerable<ProflieDriverGetAllDto>> GetAllProfile(int driverId)
        {
            var profileList = await _radioCabsContext.ProfileDrivers.
                AsNoTracking().
                Include(p => p.Driver).Where(p=>p.DriverId==driverId).ToListAsync();
            var profilesToReturn = profileList.Select(p => new ProflieDriverGetAllDto
            {
                Id = p.Id,
                Image = p.Image,
                Name = p.Driver!.DriverName,
                Description = p.Driver!.Description
            });
            return profilesToReturn;
        }
        public async Task<IEnumerable<ProflieDriverGetAllDto>> GetAllProfileToClient()
        {
            var profileList = await _radioCabsContext.ProfileDrivers.
                AsNoTracking().
                Include(p => p.Driver).ToListAsync();
            var profilesToReturn = profileList.Select(p => new ProflieDriverGetAllDto
            {
                Id = p.Id,
                Image = p.Image,
                Name = p.Driver!.DriverName,
                Description = p.Driver!.Description
            });
            return profilesToReturn;
        }
    }
}
