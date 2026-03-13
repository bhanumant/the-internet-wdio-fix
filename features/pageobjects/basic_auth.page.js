class BasicAuthPage {
  get message() {
    return $(".example p");
  }

  async login(username, password) {
    await browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`,
    );
  }
  open(username, password) {
    return browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth/`,
    );
  }
}

export default new BasicAuthPage();