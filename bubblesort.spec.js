describe('Bubble Sort', function(){
    
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one element', function() {
    	expect (bubbleSort([1]) ).toEqual( [1] );
    });

    it('it handles an array with multiple elements', function() {
    	expect (bubbleSort([2,3,1]) ).toEqual( [1,2,3] )
    });

});

