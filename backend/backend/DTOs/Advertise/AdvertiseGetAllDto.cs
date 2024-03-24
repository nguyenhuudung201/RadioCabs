namespace RadioCabsBackEnd.DTOs.Advertise
{
    public class AdvertiseGetAllDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Image { get; set; }
        public required string Description { get; set; }
    }
}
