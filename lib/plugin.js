class SocialSplash {
  constructor (domain) {
    this.domain = domain
  }

  generate (theme, parameters) {
    const queryParameters = new URLSearchParams()
    Object.keys(parameters).forEach(parameter => {
      queryParameters.append(parameter, parameters[parameter])
    })

    return `${this.domain}/${theme}${queryParameters.toString() ? '?' : ''}${queryParameters.toString()}`
  }
}

export default (ctx, inject) => {
  const parsedOptions = <%= JSON.stringify(options) %>

  const socialSplash = new SocialSplash(parsedOptions.domain)
  ctx.$socialsplash = socialSplash
  inject('socialsplash', socialSplash)
}
