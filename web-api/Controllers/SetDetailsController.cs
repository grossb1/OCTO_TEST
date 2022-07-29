using Microsoft.AspNetCore.Mvc;
using web_api.Models.DTO;

namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class SetDetailsController : ControllerBase
{
    private static readonly Models.DTO.Set[] Sets = new[]
    {
        new Set 
        {
            GUID = 1001,
            Name = "Value Set6",
            SetType = "ValueSet",
            Organization = "PRC",
            Description = "CLC",
            Status = "Working",
            Domain = "Tx_Inpat",
            Favorite = null,
        },
        new Set
        {
            GUID = 1002,
            Name = "Super Set1",
            SetType = "SuperSet",
            Organization = "SMITREC",
            Description = "Codes for depression per elix hauser",
            Status = "Development",
            Domain = "Diagnosis",
            Favorite = null,
        },
        new Set
          {
            GUID = 1003,
            Name = "Value Set8",
            SetType = "ValueSet",
            Organization = "NEPEC",
            Description = "Codes for depression per elix hauser",
            Status = "Validated",
            Domain = "Medication",
            Favorite = true,
        },
        new Set
        {
            GUID = 1004,
            Name = "Super Set10",
            SetType = "SuperSet",
            Organization = "PERC",
            Description = "Possible something from the Ira files",
            Status = "Validated",
            Domain = "Tx_Outpat",
            Favorite = true,
        },
    };

    private readonly ILogger<SetDetailsController> _logger;

    public SetDetailsController(ILogger<SetDetailsController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetSetDetails")]
    public IActionResult Get(int guid)
    {
        try
            {
                if (guid == 0)
                {
                    return BadRequest();
                }

                Models.DTO.Set? set = Sets.FirstOrDefault(set => set.GUID == guid);

                if(set != null)
                {
                    return Ok(set);
                    
                } else {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                //LogError
                //System.Reflection.MethodInfo.GetCurrentMethod().ReflectedType.FullName
                //System.Reflection.MethodInfo.GetCurrentMethod().Name
                //ex.Message
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
    }
}