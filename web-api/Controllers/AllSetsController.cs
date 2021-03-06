using Microsoft.AspNetCore.Mvc;
using web_api.Models.DTO;

namespace web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class AllSetsController : ControllerBase
{
    private static readonly Models.DTO.AllSets[] AllSets = new[]
    {
        new AllSets 
        {
            GUID = 1001,
            SetTerm = "CLC",
            SetType = "Value Set",
            Creator = "Amy Robinson",
            Reviewer = "Jodie Trafton",
            SME = "John McCarthy",
            Organization = "PRC",
            Description = "CLC",
            Status = "Working",
            Domain = "Tx_Inpat",
        },
        new AllSets
        {
            GUID = 1002,
            SetTerm = "Depression",
            SetType = "Value Set",
            Creator = "Cora Bernard",
            Reviewer = "Jodie Trafton",
            SME = "John McCarthy",
            Organization = "SMITREC",
            Description = "Codes for depression per elix hauser",
            Status = "Development",
            Domain = "Diagnosis",
        },
        new AllSets
          {
            GUID = 1003,
            SetTerm = "Opioids",
            SetType = "Concept",
            Creator = "Susana Martins",
            Reviewer = "Rebecca Stephens",
            SME = "John McCarthy",
            Organization = "NEPEC",
            Description = "Codes for depression per elix hauser",
            Status = "Validated",
            Domain = "Medication",
        },
        new AllSets
        {
            GUID = 1004,
            SetTerm = "Depression",
            SetType = "Value Set",
            Creator = "David Write",
            Reviewer = "Shalini Gupta",
            SME = "John McCarthy",
            Organization = "PERC",
            Description = "Possible something from the Ira files",
            Status = "Validated",
            Domain = "Tx_Outpat",
        },
    };

    private readonly ILogger<AllSetsController> _logger;

    public AllSetsController(ILogger<AllSetsController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetAllSets")]
    public IActionResult Get()
    {
        return Ok(AllSets);
    }
}
