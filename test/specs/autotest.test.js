describe('Oxbox', function () {

    it('Test', async function () {

        // await browser.pause(20000)

        // await $('//android.widget.ImageView[@content-desc="Узбекcкий"]').click()
        await browser.pause(3000)

        driver.touchPerform([
            { action: 'press', options: { x: 420, y: 708 }},    //prod>test
            { action: 'wait', options: { ms: 5000 }},
            { action: 'release' }
          ]);

        await browser.pause(2000)
        await $('//android.widget.ScrollView/android.widget.EditText[1]').addValue('gxluf@telegmail.com')

        driver.touchPerform([
            { action: 'press', options: { x: 292, y: 932 }},    //prod>test
            { action: 'wait', options: { ms: 5000 }},
            { action: 'release' }
          ]);
        await browser.pause(2000)
        await $('//android.widget.ScrollView/android.widget.EditText[2]').addValue('qw12345')

        await browser.pause(2000)
        await $('//android.widget.CheckBox').click()

        await browser.pause(2000)
        await $('//android.widget.Button[@content-desc="Продолжить"]').click()

        await $('//android.view.View[@content-desc="Новые опросы: 33"]').click()
        await browser.pause(2000)

        await $('//android.widget.ImageView[@content-desc="unreal Бизнес Категория 100 до 2023-11-04"]').click()
        await browser.pause(2000)

        
    })

})