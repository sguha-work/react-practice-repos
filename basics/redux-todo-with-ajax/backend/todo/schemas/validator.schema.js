export const GetValidatorSchema = {
    type: "object",
    properties: {
      page: {type: "string"},
      limit: {type: "string"},
    },
    required: ["page", "limit"],
    additionalProperties: true,
  }
