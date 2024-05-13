using Microsoft.AspNetCore.Authentication;
using Newtonsoft.Json.Serialization;

namespace SwapIt.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string corsPolicy = "_corsPolicy";
        readonly string[] allowedUrls =
            {
                  "http://localhost:3007"
                , "http://mphdqa.mdauditenterprise.com"
                , "https://mphdqa.mdauditenterprise.com"
                , "http://mphd.mdauditenterprise.com"
                , "https://mphd.mdauditenterprise.com"
            };
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(corsPolicy,
                corsPolicyBuilder =>
                {
                    corsPolicyBuilder.WithOrigins(allowedUrls)
                                        .AllowAnyHeader()
                                        .AllowAnyMethod();
                });

            });
            services.AddControllersWithViews().AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
            services.AddControllers();

           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(corsPolicy);
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

