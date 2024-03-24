using backend.Entities;
using RadioCabsBackEnd.Entities;
using System.Security.Cryptography;
using System.Text;

namespace backend.Helpers
{
    public class PasswordHelper
    {
        private const int _keySize = 64;
        private const int _iterations = 3500;
        private static readonly HashAlgorithmName _hashAlgorithm = HashAlgorithmName.SHA512;

        public static string HashPassword(string password, out string passwordSalt)
        {
            var salt = RandomNumberGenerator.GetBytes(_keySize);

            passwordSalt = Convert.ToHexString(salt);

            var passwordHash = Rfc2898DeriveBytes.Pbkdf2(Encoding.UTF8.GetBytes(password), salt, _iterations, _hashAlgorithm, _keySize);

            return Convert.ToHexString(passwordHash);
        }

        public static bool VerifyPasswordCompany(Company company, string password)
        {
            var passwordHashToCompare = Rfc2898DeriveBytes.Pbkdf2(Encoding.UTF8.GetBytes(password), Convert.FromHexString(company.Salt!), _iterations, _hashAlgorithm, _keySize);

            return CryptographicOperations.FixedTimeEquals(passwordHashToCompare, Convert.FromHexString(company.Password!));
        }
        public static bool VerifyPasswordDriver(Driver driver, string password)
        {
            var passwordHashToCompare = Rfc2898DeriveBytes.Pbkdf2(Encoding.UTF8.GetBytes(password), Convert.FromHexString(driver.Salt!), _iterations, _hashAlgorithm, _keySize);

            return CryptographicOperations.FixedTimeEquals(passwordHashToCompare, Convert.FromHexString(driver.Password!));
        }
        public static bool VerifyPasswordAdmin(Admin admin, string password)
        {
            var passwordHashToCompare = Rfc2898DeriveBytes.Pbkdf2(Encoding.UTF8.GetBytes(password), Convert.FromHexString(admin.Salt!), _iterations, _hashAlgorithm, _keySize);

            return CryptographicOperations.FixedTimeEquals(passwordHashToCompare, Convert.FromHexString(admin.Password!));
        }
    }
}
