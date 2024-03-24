using RadioCabsBackEnd.DTOs.Advertise;

namespace RadioCabsBackEnd.Services.Advertise
{
    public interface IAdvertiseServices
    {
        Task<AdvertiseCreateDto> Create(AdvertiseCreateDto dto);
        Task<AdvertiseDetailDto> GetAdvertiseDetailAsync(int advertiseId);
        Task<IEnumerable<AdvertiseGetAllDto>> GetAllAdvertise();
    }
}
