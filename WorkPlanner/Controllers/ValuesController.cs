using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WorkPlanner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetAction()
        {
            return new string[] {".Net", "Backend"};
        }

        [HttpGet("{id}")]
        public ActionResult<string> GetAction(int id)
        {
            return "value";
        }
    }
}