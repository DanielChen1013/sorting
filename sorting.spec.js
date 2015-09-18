describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('one element', function(){
        expect( bubbleSort([4]) ).toEqual( [4] );
    });
    it('two different elements', function(){
        expect( bubbleSort([5, 2]) ).toEqual( [2, 5] );
    });
    it('many elements', function(){
        expect( bubbleSort([8,7,0,2,1,13,12,-1]) ).toEqual( [-1,0,1,2,7,8,12,13] );
    });
    it('many more elements', function(){
        expect( bubbleSort([10,9,8,5,4,2,1,0,-5]) ).toEqual( [-5,0,1,2,4,5,8,9,10] );
    });
    
    // remember to return number of swaps

});


describe('Merge Sort', function(){
    it('merge function 1', function(){
        expect( merge([1,2,3],[4,5,6]) ).toEqual( [1,2,3,4,5,6] );
    });
    it('merge function 2', function(){
        expect( merge([1,7,9],[3,8,10]) ).toEqual( [1,3,7,8,9,10] );
    });

    it('split function even', function(){
        expect( split([1,7,9,3,8,10]) ).toEqual( [[1,7,9],[3,8,10]] );
    });

    it('split function odd', function(){
        expect( split([1,7,9,3,8,10,15]) ).toEqual( [[1,7,9],[3,8,10,15]] );
    });
    it('merge sort', function(){
        expect( mergeSort([10,9,8,5,4,2,1,0,-5]) ).toEqual( [-5,0,1,2,4,5,8,9,10] );
    });
    // remember to return number of swaps

});
