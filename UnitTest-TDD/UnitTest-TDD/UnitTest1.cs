using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTest_TDD
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            //arrange:
            string cpf = "12345678909";
            string nome = "Manuel da Silva";

            //act:
            Pessoa pessoa = new Pessoa(cpf, nome);

            //assert:
            Assert.IsNotNull(pessoa);
            Assert.IsTrue(pessoa.Cpf == cpf);
            Assert.IsTrue(pessoa.Nome == nome);

        }
    }
}
