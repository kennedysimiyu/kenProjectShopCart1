describe('kenApp Application',
    function () {

    describe('productList',
        function () {

        // get the main application route page

            beforeEach(
                function () {
            browser.get('index.html');
        });

            it('should be able to perform fileter for products',
                function () {

            var productList = element.all(by.repeater('product in vm.products'));
            var query = element(by.model('vm.query'));

            // search for a product by input product name

            query.sendKeys('Harvesting Dry Sheet');
            expect(phoneList.count()).toBe(1);
            query.clear();

        });

    });

});