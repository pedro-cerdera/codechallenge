/* eslint-disable no-undef */
describe('Login', () => {
  it('Should have a login screen', async () => {
    await expect(element(by.id('home-container'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toHaveText('R$ 0,00');
  });
});
