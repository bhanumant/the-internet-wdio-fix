class CheckboxesPage {
  get elements() {
    return {
      header: () => $("h3"),
      checkbox: (num) => $$('input[type="checkbox"]')[num - 1],
    };
  }

  async select(num) {
    const checkbox = await this.elements.checkbox(num);
    if (!(await checkbox.isSelected())) {
      await checkbox.click();
    }
  }
}

export default new CheckboxesPage();