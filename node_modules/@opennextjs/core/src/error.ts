export class UnknownProviderError extends Error {
  constructor(public provider?: string) {
    super("Unknown provider: " + provider);
  }
}

export class MissingParameterError extends Error {
  constructor(public parameter: string) {
    super("Missing parameter: " + parameter);
  }
}

export class UnknownStateError extends Error {
  constructor() {
    super(
      "The browser was in an unknown state. This could be because certain cookies expired or the browser was switched in the middle of an authentication flow",
    );
  }
}

export class UnauthorizedClientError extends Error {
  constructor(
    public client: string,
    public redirect_uri: string,
  ) {
    super("Unauthorized client");
  }
}

export class InvalidSessionError extends Error {
  constructor() {
    super("Invalid session");
  }
}

export class InvalidRefreshTokenError extends Error {
  constructor() {
    super("Invalid refresh token");
  }
}

export class InvalidAuthorizationCodeError extends Error {
  constructor() {
    super("Invalid authorization code");
  }
}
