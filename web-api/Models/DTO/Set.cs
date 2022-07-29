using System.ComponentModel.DataAnnotations;
namespace web_api.Models.DTO;

public class Set
{
    public int GUID { get; set; }
    public string? SetType { get; set; }
    public string? Name { get; set; }
    public string? Domain { get; set; } //vocabulary
    public string? Description { get; set; }
    public string? Status { get; set; }
    public string? Organization { get; set; }
    public bool? Favorite  { get; set; }
}