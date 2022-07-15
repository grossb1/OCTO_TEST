using System.ComponentModel.DataAnnotations;
namespace web_api.Models.DTO;

public class Announcement
{
    public int? AnnouncementID { get; set; }
    public string? Message { get; set; }
}