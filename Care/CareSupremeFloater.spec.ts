import { test, expect } from '@playwright/test';
import path from 'path';

test('Floater', async ({ page }) => {
  await page.goto('https://vizzainsurance.com/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '   POS Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  
  await page.waitForTimeout(2000); 
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
  await page.waitForTimeout(1000);
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  await page.waitForTimeout(2000);

  const nameInput = page.getByRole('textbox', { name: 'Name' });
  await nameInput.waitFor({ state: 'visible', timeout: 45000 });
  await nameInput.fill('Test');
  
  const emailInput = page.getByRole('textbox', { name: 'email' });
  await emailInput.waitFor({ state: 'visible' });
  await emailInput.fill('Free@gmail.com');
  
  const phoneInput = page.getByRole('textbox', { name: 'phone Number' });
  await phoneInput.waitFor({ state: 'visible' });
  await phoneInput.fill('8531913069');
  
  const nextButton = page.getByRole('button', { name: 'Next' });
  await nextButton.waitFor({ state: 'visible' });
  await nextButton.click();

  await page.locator('#mat-input-17').type('25');
  await page.locator('#mat-input-19').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
 
  await page.getByRole('button', { name: '₹ 10124/Yr' }).click();
  await page.getByText('Other', { exact: true }).click();
  await page.getByLabel('Identity Proof Type').getByText('Identity Proof Type').click();
  await page.getByText('PAN', { exact: true }).click();
  await page.getByText('Address Proof TypeAddress').click();
  await page.getByText('Voter ID').click();

  // Setup file path for uploads
  const uploadFile = path.join(__dirname, '../assets/Arunkumar.jpg');

  // Upload Identity Proof
  const identityProofUpload = page.locator('input[type="file"]').first();
  await identityProofUpload.setInputFiles(uploadFile);

  // Upload Address Proof
  const addressProofUpload = page.locator('input[type="file"]').nth(1);
  await addressProofUpload.setInputFiles(uploadFile);

  await page.getByRole('button', { name: 'Submit' }).click();

  await page.locator('#cdk-accordion-child-17').getByText('TitleTitle *').click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('test');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('s');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('08062002');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
  await page.locator('#mat-input-32').fill('34');
  await page.locator('#mat-input-33').fill('anna nagar ');
  await page.locator('#mat-input-34').fill('627005');
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-value-23').getByText('City').click();
  await page.waitForTimeout(2000);
  await page.getByText('Palayamkottai').click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
  await page.getByRole('strong').click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
  await page.locator('#cdk-accordion-child-23 div').filter({ hasText: /^Weight\(Kg\) \*$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
  await page.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
  await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  await page.getByText('Ms', { exact: true }).click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('test');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('w');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('test');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('08062001');
  await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
  await page.getByText('SPOUSE', { exact: true }).click();
  await page.locator('#cdk-accordion-child-24 div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
  await page.getByRole('textbox', { name: 'Height(Cm)' }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).click();
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
  await page.locator('#cdk-accordion-child-24').getByRole('button', { name: 'Next' }).click();
  await page.locator('#cdk-accordion-child-18').getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Name of Nominee' }).click();
  await page.getByRole('textbox', { name: 'Name of Nominee' }).fill('nominee');
  await page.getByText('Relationship with InsuredRelationship with Insured *').click();
  await page.getByText('MOTHER', { exact: true }).click();
  await page.locator('#cdk-accordion-child-19').getByRole('button', { name: 'Next' }).click();
  await expect(page.locator('app-religare-health-proposal')).toContainText('₹ 10124.00');
  await page.getByRole('button', { name: 'Copy Link' }).click();
  await page.getByRole('button', { name: 'Pay by Customer' }).click();
});