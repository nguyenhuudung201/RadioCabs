using backend.DatabaseContexts;
using backend.Services.Marital;
using backend.Services.MemberServices;
using backend.Services.ProfileCompanyServices;
using backend.Services.ProfileDriverServices;
using backend.Services.SexService;
using backend.Services.TokenService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RadioCabsBackEnd.Services.Admin;
using RadioCabsBackEnd.Services.Advertise;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", builder => builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()
        );
});
builder.Services
    .AddControllers()
    .AddJsonOptions(configure =>
    {
        configure.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;

    });

builder.Services.AddDbContext<RadioCabsContext>(opts =>
    opts.UseSqlServer(builder.Configuration["ConnectionString:RadioCabs"]));
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@35 superSecretKey@35 superSecretKey@35 superSecretKey@35")),
        ValidateAudience = false,
        ValidateIssuer = false,
        ClockSkew = TimeSpan.Zero
    };
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<ITokenService, TokenService>();
builder.Services.AddTransient<IMemberServices , MemberServices>();
builder.Services.AddTransient<ISexServices, SexServices>();
builder.Services.AddTransient<IMaritalServices, MaritalServices>();
builder.Services.AddTransient<IProfileDriverServices, ProfileDriverServices>();
builder.Services.AddTransient<IProfileCompanycs, ProfileCompanyServices>();
builder.Services.AddTransient<IAdvertiseServices, AdvertiseServices>();
builder.Services.AddTransient<IAdminServices, AdminServices>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("MyPolicy");
app.UseStaticFiles();
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
