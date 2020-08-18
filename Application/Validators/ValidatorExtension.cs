using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtension
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T,string> ruleBuilder){
            var option = ruleBuilder.NotEmpty().MinimumLength(6).WithMessage("Password must be atleat 6 characters long")
            .Matches("[A-Z]").WithMessage("Password must contain 1 upper case letter")
            .Matches("[a-z]").WithMessage("Password must contain 1 lower case letter")
            .Matches("[0-9]").WithMessage("Password must contain 1 numerical digit")
            .Matches("[^a-zA-z0-9]").WithMessage("Password must contain 1 nonAlphaNumeric character");
        return option;
        }
    }
}