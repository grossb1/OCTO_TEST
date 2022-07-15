using Microsoft.AspNetCore.Mvc;
using web_api.Models.DTO;

namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ValueSetsController : ControllerBase
{
    private static readonly Models.DTO.AllSets[] ValueSets = new[]
    {
        new AllSets 
        {
            GUID = 1001,
            SetTerm = "Value Set6",
            SetType = "Value Set",
            Creator = "Amy",
            Reviewer = "Jodie",
            SME = "John",
            Organization = "PRC",
            Description = "CLC",
            Status = "Working",
            Domain = "Tx_Inpat",
            Favorite = null,
        },
        new AllSets
        {
            GUID = 1002,
            SetTerm = "Value Set1",
            SetType = "Value Set",
            Creator = "Cora",
            Reviewer = "Jodie",
            SME = "John",
            Organization = "SMITREC",
            Description = "Codes for depression per elix hauser",
            Status = "Development",
            Domain = "Diagnosis",
            Favorite = null,
        },
        new AllSets
          {
            GUID = 1003,
            SetTerm = "Value Set8",
            SetType = "Value Set",
            Creator = "Susana",
            Reviewer = "Rebecca",
            SME = "John",
            Organization = "NEPEC",
            Description = "Codes for depression per elix hauser",
            Status = "Validated",
            Domain = "Medication",
            Favorite = true,
        },
        new AllSets
        {
            GUID = 1004,
            SetTerm = "Value Set10",
            SetType = "Value Set",
            Creator = "David",
            Reviewer = "Shalini",
            SME = "Cora",
            Organization = "PERC",
            Description = "Possible something from the Ira files",
            Status = "Validated",
            Domain = "Tx_Outpat",
            Favorite = true,
        },
    };

    private readonly ILogger<AllSetsController> _logger;

    public ValueSetsController(ILogger<AllSetsController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetValueSets")]
    public IActionResult Get()
    {
        return Ok(ValueSets);
    }
}
