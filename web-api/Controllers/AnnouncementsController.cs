using Microsoft.AspNetCore.Mvc;
using web_api.Models.DTO;

namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class AnnouncementsController : ControllerBase
{
    private static readonly Models.DTO.Announcement[] Announcements = new[]
    {
        new Announcement 
        {
            AnnouncementID = 1,
            Message = "#1. Auto populated with a message about down time if any of the Lib tables used populate it is null or XLA cannot connect to SQL 20 otherwise blank.",
        },
        // new Announcement 
        // {
        //     AnnouncementID = 2,
        //     Message = "#2. Auto populated with a message about down time if any of the Lib tables used populate it is null or XLA cannot connect to SQL 20 otherwise blank.",
        // },
    };

    private readonly ILogger<AnnouncementsController> _logger;

    public AnnouncementsController(ILogger<AnnouncementsController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetAnnouncements")]
    public IActionResult Get()
    {
        return Ok(Announcements);
        //return Ok(null);
    }
}