using backend.DTOs.Member;
using backend.DTOs.ProfileDrive;

namespace backend.Services.ProfileDriverServices
{
    public interface IProfileDriverServices
    {
        Task<ProfileToCreate> CreateProfile(ProfileToCreate dto,int driverId);
        Task<ProfileDriverDetailGetDto> GetProfileDetailAsync(int profileId);
        Task<IEnumerable<ProflieDriverGetAllDto>> GetAllProfile(int driverId);
        Task<IEnumerable<ProflieDriverGetAllDto>> GetAllProfileToClient();
        Task UpdateProfile(ProfileDriverUpdateDto dto, int profileId);
    }
}
