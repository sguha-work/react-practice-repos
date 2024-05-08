export const LoginValidatorSchema = {
    type: "object",
    properties: {
      email: {type: "string"},
      password: {type: "string"},
    },
    required: ["email", "password"],
    additionalProperties: false,
  }
export const RegisterValidatorSchema = {
    type: "object",
    properties: {
      email: {type: "string"},
      password: {type: "string"},
    },
    required: ["email", "password"],
    additionalProperties: false,
  }