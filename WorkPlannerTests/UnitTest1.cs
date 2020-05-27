using System;
using Xunit;
using WorkPlanner.Controllers;

namespace WorkPlannerTests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var controller = new HomeController(null);

            Assert.NotNull(controller);
        }
    }
}
