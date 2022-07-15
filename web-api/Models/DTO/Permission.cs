using System.ComponentModel.DataAnnotations;
namespace web_api.Models.DTO;

public class Permission
{
    public int? PermissionID { get; set; }
    public string? PermissionName { get; set; }
}