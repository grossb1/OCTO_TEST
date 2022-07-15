using System.ComponentModel.DataAnnotations;
namespace web_api.Models.DTO;

public class Role
{
    public int? RoleID { get; set; }
    public string? RoleName { get; set; }
    public Permission[]? Permissions { get; set; }
}