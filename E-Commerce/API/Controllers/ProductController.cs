using Microsoft.AspNetCore.Mvc;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProduct _dbProduct;

        public ProductController(IProduct dbProduct)
        {
            _dbProduct = dbProduct;
        }

        [HttpGet("products")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _dbProduct.GetAllProductAsync());
        }

        [HttpGet("product")]
        public async Task<IActionResult>GetProduct(int id)
        {
            return Ok(await _dbProduct.GetProductAsync(id));
        }


        
        public async Task<IActionResult> AddProduct()
        {
            return Ok(new NotImplementedException());
        }


    }
}
