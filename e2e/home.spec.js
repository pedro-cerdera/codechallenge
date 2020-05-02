/* eslint-disable no-undef */
describe('Transaction', () => {
  it('Should open home screen', async () => {
    await expect(element(by.id('home-container'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toHaveText('R$ 0,00');
  });

  it('Should open new request screen', async () => {
    await element(by.id('Nova Transação')).tap();
    await expect(element(by.id('new-request-screen'))).toBeVisible();
  });

  it('Should insert a new transaction', async () => {
    await element(by.id('value')).tap();
    await element(by.id('value')).typeText('10000');
    await expect(element(by.id('value'))).toHaveText('R$100,00');

    await element(by.id('description')).tap();
    await element(by.id('description')).typeText('Transaction Teste');
    await expect(element(by.id('description'))).toHaveText('Transaction Teste');

    await element(by.id('button')).tap();
    await expect(element(by.id('home-container'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toHaveText('-R$ 100,00');
  });

  it('Should insert a new transaction and update value', async () => {
    await element(by.id('Nova Transação')).tap();
    await expect(element(by.id('new-request-screen'))).toBeVisible();

    await element(by.id('value')).tap();
    await element(by.id('value')).typeText('20000');
    await expect(element(by.id('value'))).toHaveText('R$200,00');

    await element(by.id('description')).tap();
    await element(by.id('description')).typeText('Transaction Teste');
    await expect(element(by.id('description'))).toHaveText('Transaction Teste');

    await element(by.id('switch')).tap();

    await element(by.id('button')).tap();
    await expect(element(by.id('home-container'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toHaveText('R$ 100,00');
  });

  it('Should persists inserted value', async () => {
    await device.relaunchApp({delete: false});
    await expect(element(by.id('home-container'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toHaveText('R$ 100,00');
  });

  it('Should not insert a new transaction', async () => {
    await element(by.id('Nova Transação')).tap();
    await expect(element(by.id('new-request-screen'))).toBeVisible();

    await element(by.id('button')).tap();
    await expect(element(by.id('home-container'))).toBeNotVisible();
    await expect(element(by.id('new-request-screen'))).toBeVisible();
    await waitFor(element(by.text('Valor inválido'))).toBeVisible();
    await waitFor(element(by.text('Descrição inválida'))).toBeVisible();

    await element(by.id('value')).tap();
    await element(by.id('value')).typeText('20000');
    await expect(element(by.id('value'))).toHaveText('R$200,00');

    await element(by.id('button')).tap();
    await expect(element(by.id('home-container'))).toBeNotVisible();
    await expect(element(by.id('new-request-screen'))).toBeVisible();
    await waitFor(element(by.text('Descrição inválida'))).toBeVisible();
    await waitFor(element(by.text('Valor inválido'))).toBeNotVisible();

    await element(by.id('description')).tap();
    await element(by.id('description')).typeText('Transaction Teste');
    await expect(element(by.id('description'))).toHaveText('Transaction Teste');

    await element(by.id('switch')).tap();

    await element(by.id('button')).tap();
    await expect(element(by.id('home-container'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toBeVisible();
    await expect(element(by.id('ammount-value'))).toHaveText('R$ 300,00');
  });
});
