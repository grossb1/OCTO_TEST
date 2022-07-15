using Microsoft.AspNetCore.Mvc;
using web_api.Models.DTO;

namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class RolesController : ControllerBase
{
    private static readonly Models.DTO.Role[] Roles = new[]
    {
        new web_api.Models.DTO.Role 
        {
            RoleID = 1,
            RoleName = "Guest",
            Permissions = 
                new web_api.Models.DTO.Permission[]
                {
                    new web_api.Models.DTO.Permission
                        { PermissionID = 1, PermissionName = "Dashboard Read"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 2, PermissionName = "Codeset Read"},
                },
        },
        new web_api.Models.DTO.Role 
        {
            RoleID = 2,
            RoleName = "Analyst",
            Permissions = 
                new web_api.Models.DTO.Permission[]
                {
                    new web_api.Models.DTO.Permission
                        { PermissionID = 3, PermissionName = "Dashboard Edit"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 4, PermissionName = "Codeset Edit"},
                },
        },
        new web_api.Models.DTO.Role 
        {
            RoleID = 3,
            RoleName = "Contributor",
            Permissions = 
                new web_api.Models.DTO.Permission[]
                {
                    new web_api.Models.DTO.Permission
                        { PermissionID = 3, PermissionName = "Dashboard Edit"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 4, PermissionName = "Codeset Edit"},
                },
        },
        new web_api.Models.DTO.Role 
        {
            RoleID = 4,
            RoleName = "Librarian",
            Permissions = 
                new web_api.Models.DTO.Permission[]
                {
                    new web_api.Models.DTO.Permission
                        { PermissionID = 3, PermissionName = "Dashboard Edit"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 4, PermissionName = "Codeset Edit"},
                },
        },
        new web_api.Models.DTO.Role 
        {
            RoleID = 5,
            RoleName = "Subject Matter Expert",
            Permissions = 
                new web_api.Models.DTO.Permission[]
                {
                    new web_api.Models.DTO.Permission
                        { PermissionID = 3, PermissionName = "Dashboard Edit"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 4, PermissionName = "Codeset Edit"},
                },
        },
        new web_api.Models.DTO.Role 
        {
            RoleID = 6,
            RoleName = "System Admin",
            Permissions = 
                new web_api.Models.DTO.Permission[]
                {
                    new web_api.Models.DTO.Permission
                        { PermissionID = 3, PermissionName = "Dashboard Edit"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 4, PermissionName = "Codeset Edit"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 5, PermissionName = "Dashboard Delete"},
                    new web_api.Models.DTO.Permission
                        { PermissionID = 6, PermissionName = "Codeset Delete"},
                },
        }
    };

    private readonly ILogger<RolesController> _logger;

    public RolesController(ILogger<RolesController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetRoles")]
    public IActionResult Get()
    {
        return Ok(Roles);
    }
}