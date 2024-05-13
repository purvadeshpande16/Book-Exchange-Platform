using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SwapIt.API.Models;
using System.Data.SqlClient;

namespace SwapIt.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IConfiguration _config;
        public BookController(IConfiguration config)
        {

            _config = config;
        }

        [HttpPost("AddBook", Name = "AddBookDetails")]
        public bool AddBook([FromForm] BookDetails book)
        {
            try
            {
                string connectionString = "Data Source=(LocalDB)\\SwapItDB;Initial Catalog=SwapIt;Integrated Security=True;";

                string sqlQuery = $@"INSERT INTO BookDetails (Title, Author, Genre, Action, Price, Location, AddedByUserName) 
                                    VALUES ('{book.Title}', '{book.Author}', '{book.Genre}', '{book.Action}', '{book.Price}', '{book.Location}', 
                                    '{book.AddedByUserName}')";

                

                // Create a SqlConnection object
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    // Open the connection
                    connection.Open();

                    // Create a SqlCommand object with the SQL query and SqlConnection
                    using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                    {
                       
                        // Execute the command
                        int rowsAffected = command.ExecuteNonQuery();

                        // Check if any rows were affected
                        if (rowsAffected > 0)
                        {
                            Console.WriteLine("Data inserted successfully.");
                        }
                        else
                        {
                            Console.WriteLine("No data inserted.");
                        }
                    }

                
                }
                return true;
                }

            catch (Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost("GetBook", Name = "GetBookDetails")]
        public List<BookDetails> GetBook([FromForm] string bookName)
        {
            try
            {
                List<BookDetails> books = new List<BookDetails>();
                string connectionString = "Data Source=(LocalDB)\\SwapItDB;Initial Catalog=SwapIt;Integrated Security=True;";

                string sqlQuery = $@"SELECT [Title]
                                              ,[Author]
                                              ,[Genre]
                                              ,[Action]
                                              ,[Price]
                                              ,[Location]
                                              ,[AddedByUserName]
                                          FROM [SwapIt].[dbo].[BookDetails]
                                          where Title like '%{bookName}%'";



                // Create a SqlConnection object
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    // Open the connection
                    connection.Open();

                    // Create a SqlCommand object with the SQL query and SqlConnection
                    using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                    {

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                BookDetails book = new BookDetails();
                                book.Title = reader.GetString(0);
                                book.Author = reader.GetString(1);
                                book.Genre = reader.GetString(2);
                                book.Action = reader.GetString(3);
                                book.Price = reader.GetString(4);
                                book.Location = reader.GetString(5);
                                book.AddedByUserName = reader.GetString(6);
                                books.Add(book);
                            }
                        }
                    }


                }
                return books;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
