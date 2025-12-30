import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsStrongPassword(
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsStrongPassword',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          if (!value) return false;

          const hasMinLength = value.length >= 8;
          const hasTwoLowercase =
            (value.match(/[a-z]/g) || []).length >= 2;
          const hasUppercase = /[A-Z]/.test(value);
          const hasNumber = /\d/.test(value);
          const hasSpecialChar = /[@$!%*?&]/.test(value);

          return (
            hasMinLength &&
            hasTwoLowercase &&
            hasUppercase &&
            hasNumber &&
            hasSpecialChar
          );
        },

        defaultMessage(args: ValidationArguments) {
          const value = args.value || '';

          if (value.length < 8)
            return 'Password must be at least 8 characters long';

          if ((value.match(/[a-z]/g) || []).length < 2)
            return 'Password must contain at least 2 lowercase letters';

          if (!/[A-Z]/.test(value))
            return 'Password must contain at least 1 uppercase letter';

          if (!/\d/.test(value))
            return 'Password must contain at least 1 number';

          if (!/[@$!%*?&]/.test(value))
            return 'Password must contain at least 1 special character';

          return 'Password is not strong enough';
        },
      },
    });
  };
}
