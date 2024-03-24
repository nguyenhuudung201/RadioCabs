using backend.DatabaseContexts;

using backend.Entities;
using Microsoft.EntityFrameworkCore;
using RadioCabsBackEnd.DTOs.Advertise;

namespace RadioCabsBackEnd.Services.Advertise
{
    public class AdvertiseServices:IAdvertiseServices
    {
        private readonly RadioCabsContext _radioCabsContext;
        public AdvertiseServices(RadioCabsContext radioCabsContext)
        {
            _radioCabsContext = radioCabsContext;
        }
        public async Task<AdvertiseCreateDto> Create(AdvertiseCreateDto dto)
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/Advertises");
            FileInfo fileInfo = new FileInfo(dto.Image.FileName);
            string fileName = "Advertise_Advertise_image_" + DateTimeOffset.Now.ToUnixTimeMilliseconds().ToString() + fileInfo.Extension;
            string fileNameWithPath = Path.Combine(path, fileName);

            using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
            {
                dto.Image.CopyTo(stream);
            }
            var AdvertiseToCreate = new Entities.Advertise
            {
               CompanyName=dto.CompanyName,
               Address=dto.Address,
               RoleId=3,
               Telephone=dto.Telephone,
               Description=dto.Description,
               Designation=dto.Designation,
               Mobile=dto.Mobile,
               Email=dto.Email,
               Password=dto.Password,
               Image = $"/images/Advertises/{fileName}",
               Fax=dto.Fax,
            };
            _radioCabsContext.Advertises.Add(AdvertiseToCreate);
            await _radioCabsContext.SaveChangesAsync();
            return dto;
        }
        public async Task<AdvertiseDetailDto> GetAdvertiseDetailAsync(int advertiseId)
        {
            var advertise = await _radioCabsContext.Advertises.AsNoTracking().Where(a=>a.Id==advertiseId).SingleOrDefaultAsync();
            var advertiseToReturn = new AdvertiseDetailDto
            {
                Address=advertise.Address,
                Email=advertise.Email,
                Description=advertise.Description,
                CompanyName=advertise.CompanyName,
                Designation=advertise.Designation,
                Mobile=advertise.Mobile,
                Telephone=advertise.Telephone,
                Image=advertise.Image,
                Fax=advertise.Fax,

            };
            return advertiseToReturn;
        }
        public async Task<IEnumerable<AdvertiseGetAllDto>> GetAllAdvertise()
        {
            var advertiseToList= await _radioCabsContext.Advertises.AsNoTracking().ToListAsync();
            var advertiseTolistReturn = advertiseToList.Select(a => new AdvertiseGetAllDto { 
                Description = a.Description,
                Image = a.Image,
                Id = a.Id, 
                Name = a.CompanyName 
            });
            return advertiseTolistReturn;
        }
    }
}
