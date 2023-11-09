describe('UZD+', function() {

    it('Test', async function() {

        await browser.pause(5000);

        // await $('//android.widget.ImageView[@content-desc="Профиль Вкладка 4 из 4"]').click();
        driver.touchPerform([
            { action: 'press', options: { x: 950, y: 2174 }},   
            { action: 'wait', options: { ms: 5000 }},
            { action: 'release' }
          ]);
        await browser.pause(2000);

        await $('//android.widget.EditText').click();
        await browser.pause(2000);

        await $('//android.widget.EditText').addValue('931431817');
        await browser.pause(2000);

        await $('//android.widget.Button[@content-desc="Продолжить"]').click();
        await browser.pause(2000);

        await $('//android.widget.EditText').addValue('700500');
        await browser.pause(2000);

        driver.touchPerform([
            { action: 'press', options: { x: 320, y: 470 }},   
            { action: 'wait', options: { ms: 5000 }},
            { action: 'release' }
          ]);
        await browser.pause(2000);

        await $('//android.widget.EditText').addValue('Javohir');
        await browser.pause(2000);

        
        await $('//android.widget.Button[@content-desc="Продолжить"]').click();
        await browser.pause(2000);

        await $('//android.widget.ImageView[@content-desc="Военный"]').click();
        await browser.pause(2000);

        await $('//android.widget.ImageView[@content-desc="Детектив"]').click();
        await browser.pause(2000);

        await $('//android.widget.ImageView[@content-desc="Биография"]').click();
        await browser.pause(2000);

        await $('//android.widget.ImageView[@content-desc="Криминал"]').click();
        await browser.pause(2000);

        await $('//android.widget.ImageView[@content-desc="Исторический"]').click();
        await browser.pause(2000);


        await $('//android.widget.Button[@content-desc="Продолжить"]').click();
        await browser.pause(2000);

        await $('//android.widget.Button[@content-desc="Попробовать UZD+"]').click()
        await browser.pause(2000);

    })

    //======================NEGATIVE CASES=========================//

    // it('Test', async function() {

    //     await browser.pause(5000);

    //     // await $('//android.widget.ImageView[@content-desc="Профиль Вкладка 4 из 4"]').click();
    //     driver.touchPerform([
    //         { action: 'press', options: { x: 950, y: 2174 }},   
    //         { action: 'wait', options: { ms: 5000 }},
    //         { action: 'release' }
    //       ]);
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('  ');
    //     await browser.pause(2000);

    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('000000');
    //     await browser.pause(2000);

    //     driver.touchPerform([
    //         { action: 'press', options: { x: 320, y: 470 }},   
    //         { action: 'wait', options: { ms: 5000 }},
    //         { action: 'release' }
    //       ]);
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('Javohir');
    //     await browser.pause(2000);

        
    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Военный"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Детектив"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Биография"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Криминал"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Исторический"]').click();
    //     await browser.pause(2000);


    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.Button[@content-desc="Попробовать UZD+"]').click()
    //     await browser.pause(2000);

    // })

    //======================Invalid Name==================//

    // it('Test', async function() {

    //     await browser.pause(5000);

    //     // await $('//android.widget.ImageView[@content-desc="Профиль Вкладка 4 из 4"]').click();
    //     driver.touchPerform([
    //         { action: 'press', options: { x: 950, y: 2174 }},   
    //         { action: 'wait', options: { ms: 5000 }},
    //         { action: 'release' }
    //       ]);
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('931431817');
    //     await browser.pause(2000);

    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('000000');
    //     await browser.pause(2000);

    //     driver.touchPerform([
    //         { action: 'press', options: { x: 320, y: 470 }},   
    //         { action: 'wait', options: { ms: 5000 }},
    //         { action: 'release' }
    //       ]);
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue(' ');
    //     await browser.pause(2000);

        
    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Военный"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Детектив"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Биография"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Криминал"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Исторический"]').click();
    //     await browser.pause(2000);


    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.Button[@content-desc="Попробовать UZD+"]').click()
    //     await browser.pause(2000);

    // })

    //==================Invalid OTP code=====================//

    // it('Test', async function() {

    //     await browser.pause(5000);

    //     // await $('//android.widget.ImageView[@content-desc="Профиль Вкладка 4 из 4"]').click();
    //     driver.touchPerform([
    //         { action: 'press', options: { x: 950, y: 2174 }},   
    //         { action: 'wait', options: { ms: 5000 }},
    //         { action: 'release' }
    //       ]);
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('931431817');
    //     await browser.pause(2000);

    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('000000');
    //     await browser.pause(2000);

    //     driver.touchPerform([
    //         { action: 'press', options: { x: 320, y: 470 }},   
    //         { action: 'wait', options: { ms: 5000 }},
    //         { action: 'release' }
    //       ]);
    //     await browser.pause(2000);

    //     await $('//android.widget.EditText').addValue('Javohir');
    //     await browser.pause(2000);

        
    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Военный"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Детектив"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Биография"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Криминал"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.ImageView[@content-desc="Исторический"]').click();
    //     await browser.pause(2000);


    //     await $('//android.widget.Button[@content-desc="Продолжить"]').click();
    //     await browser.pause(2000);

    //     await $('//android.widget.Button[@content-desc="Попробовать UZD+"]').click()
    //     await browser.pause(2000);

    // })

});