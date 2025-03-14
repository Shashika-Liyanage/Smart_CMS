import { RegisterOptions, UseFormRegister } from 'react-hook-form';

type ValidationRules = {
  required?: boolean;
  range?: { min?: number; max?: number };
  pattern?: { value: RegExp; message?: string };
  email?: boolean;
  phone?: boolean;
  onlyLetters?: boolean;
  onlyNumbers?: boolean;
};

class Validation {
  static apply(
    register: UseFormRegister<any>,
    fieldName: string,
    rules: ValidationRules,
  ) {
    const validationRules: RegisterOptions = {
      ...Validation.buildRules(fieldName, rules),
    };
    return register(fieldName, validationRules);
  }

  private static buildRules(
    fieldName: string,
    rules: ValidationRules,
  ): RegisterOptions {
    const validationRules: RegisterOptions = {};
    const formattedFieldName = Validation.capitalize(fieldName);

    if (rules.required) {
      validationRules.required = `${formattedFieldName} is required`;
    }

    if (rules.range) {
      Object.assign(
        validationRules,
        Validation.getRangeRules(formattedFieldName, rules.range),
      );
    }

    if (rules.onlyNumbers) {
      validationRules.pattern = Validation.getPatternRule(
        /^[0-9]+$/,
        `${formattedFieldName} must contain only numbers`,
      );
    } else if (rules.onlyLetters) {
      validationRules.pattern = Validation.getPatternRule(
        /^[A-Za-z]+$/,
        `${formattedFieldName} must contain only letters`,
      );
    } else if (rules.phone) {
      validationRules.pattern = Validation.getPatternRule(
        /^[0-9]{10}$/,
        `${formattedFieldName} must be a valid phone number (10 digits)`,
      );
    } else if (rules.email) {
      validationRules.pattern = Validation.getPatternRule(
        /^[^@]+@[^@]+\.[^@]+$/,
        `${formattedFieldName} must be a valid email address`,
      );
    } else if (rules.pattern) {
      validationRules.pattern = Validation.getPatternRule(
        rules.pattern.value,
        rules.pattern.message || `${formattedFieldName} has an invalid format`,
      );
    }

    return validationRules;
  }

  private static getRangeRules(
    fieldName: string,
    range: { min?: number; max?: number },
  ): RegisterOptions {
    const rangeRules: RegisterOptions = {};
    if (range.min !== undefined) {
      rangeRules.min = {
        value: range.min,
        message: `${fieldName} must be at least ${range.min}`,
      };
    }
    if (range.max !== undefined) {
      rangeRules.max = {
        value: range.max,
        message: `${fieldName} must be at most ${range.max}`,
      };
    }
    return rangeRules;
  }

  private static getPatternRule(value: RegExp, message: string) {
    return { value, message };
  }

  private static capitalize(text: string): string {
    return text.replace(/^\w/, (char) => char.toUpperCase());
  }
}

export default Validation;
