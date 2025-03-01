import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
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
    await page.waitForLoadState('networkidle');
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


  await page.locator('#mat-input-17').fill('40');
  await page.locator('#mat-input-19').fill('40');
  await page.locator('#mat-input-21').fill('15');
  await page.locator('#mat-input-23').fill('10');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600010');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#mat-select-value-5').getByText('(+5 others)').click();
  await page.getByText('Religare').click();
  await page.getByRole('button', { name: '₹ 16717/Yr' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();

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

  await page.locator('#mat-select-value-33').getByText('Title').click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').press('CapsLock');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('T');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').press('CapsLock');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.locator('#cdk-accordion-child-17 div').filter({ hasText: /^Last Name \*$/ }).nth(3).click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').press('CapsLock');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('C');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').press('CapsLock');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Care');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121985');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('freedela@gmail.com');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
  await page.locator('#mat-input-32').click();
  await page.locator('#mat-input-32').fill('43');
  await page.locator('#mat-input-33').click();
  await page.locator('#mat-input-33').press('CapsLock');
  await page.locator('#mat-input-33').fill('C');
  await page.locator('#mat-input-33').press('CapsLock');
  await page.locator('#mat-input-33').fill('Care');
  await page.locator('#mat-input-34').click();
  await page.locator('#mat-input-34').fill('600010');
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-value-25').getByText('City').click();
  await page.waitForTimeout(2000);
  await page.getByText('Chennai').click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.locator('#mat-checkbox-16 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('#cdk-accordion-child-17').getByRole('button', { name: 'Next' }).click();
  await page.locator('#mat-checkbox-20 label').click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).click();
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
  await page.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
  await page.locator('#cdk-accordion-child-24').getByText('TitleTitle *').click();
  await page.getByText('Ms', { exact: true }).click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('Spouse');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121985');
  await page.locator('#cdk-accordion-child-24').getByText('Relationship with ProposerRelationship with Proposer *').click();
  await page.getByText('SPOUSE', { exact: true }).click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('freedela@gmail.com');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
  await page.getByRole('button', { name: 'SON DETAILS' }).click();
  await page.locator('#cdk-accordion-child-25').getByText('TitleTitle *').click();
  await page.getByRole('option', { name: 'Mr' }).locator('span').click();
 
  await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('Last Name *').fill('Son');
  await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122010');
  await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
  await page.getByText('SON', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
  await page.getByRole('button', { name: 'DAUGHTER DETAILS' }).click();
  await page.locator('#cdk-accordion-child-26 div').filter({ hasText: /^TitleTitle \*$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Ms' }).locator('span').click();
  await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('Last Name *').fill('Daughter');
  await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122015');
  await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
  await page.getByText('DAUGHTER', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
  await page.locator('#cdk-accordion-child-26').getByRole('button', { name: 'Next' }).click();
  await page.locator('#cdk-accordion-child-18').getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Name of Nominee' }).fill('Test Spouse');
  await page.getByLabel('Relationship with Insured *').getByText('Relationship with Insured').click();
  await page.getByRole('option', { name: 'SPOUSE' }).locator('span').click();
  await page.locator('#cdk-accordion-child-19').getByRole('button', { name: 'Next' }).click();
  await page.locator('#mat-checkbox-167 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.getByRole('button', { name: 'Copy Link' }).click();
  await page.getByRole('button', { name: 'Pay Now' }).click();
  await page.getByText('UPI').click();
  await page.locator('div:nth-child(2) > .flex-col > .center-box').click();
  await page.getByRole('textbox', { name: 'Enter UPI ID' }).click();
  await page.getByRole('textbox', { name: 'Enter UPI ID' }).fill('sirajabhi4-1@okaxis');
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'PROCEED' }).click();

});