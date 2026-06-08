using Microsoft.AspNetCore.Mvc;

namespace SeuProjeto.Controllers
{
    public class AlunoController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.Nome = "Jessica Mendes";
            ViewBag.Curso = "Análise e Desenvolvimento de Sistemas";
            ViewBag.Semestre = 3;

            return View();
        }

        public IActionResult Detalhes(int id)
        {
            ViewBag.Id = id;

            return View();
        }
    }
}