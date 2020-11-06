import {customFilter, customEvery, customSome,customForEach,
    customMap,customReduce,customFlat} from './customfunction.js';
import {datas} from './data.js'
import {gcd} from '../lec01/gcd.js';
import {assert, isEqual, expect} from './assertion.js';
import _ from 'lodash';

Array.prototype.customFilter = customFilter;
Array.prototype.customEvery = customEvery;
Array.prototype.customSome = customSome;
Array.prototype.customForEach = customForEach;
Array.prototype.customMap = customMap;
Array.prototype.customReduce = customReduce;
Array.prototype.customFlat = customFlat;

export function main(){

    const arr = [1, 2, , , ,[3, 4, [5, 6]]];

    console.log(arr.customFlat());

    // expect({name : 'minji', birthday : 1220, age:25}, {name : 'minji', birthday : 1220});
    // expect({name : 'minji', birthday : 1118, height:150}, {name : 'minji', birthday : 1220, height:155})

    // expect( [1,2,3,[4,5]], [1,2,3,[4,5]]);
    // expect( [1,2,{name : 'minji', birthday : 1220},[4,5]], [1,2,3,[5]]);

    // expect({ a:1, b:{c:2, d:{e:['f', {g:'h'}]},i:[]}}, { a:1, b:{c:2, d:{e:['f', {g:'h'}]},i:[]}})

    /*
    console.log( [5,10,23,4].customFilter(x => x > 8) );
    console.log( [5,10,23,4].customMap(x => x ** 2) );
    console.log( [5,20].customReduce((acc, cur) => gcd(acc, cur)));
    console.log( [10,1,2,3,4,5].customReduce((acc, cur) => acc+cur));
    console.log( ['a','b','c','a','c','d'].customReduce((acc, cur) => {
        if(!acc[cur]){
            acc[cur] = 0;
        }
        acc[cur] = acc[cur] + 1;
        return acc;
    }, {} ) );
    */

    /*
    
    function square(n) {
        return n * n;
    }
       
    _.map([4, 8], square);


    const datas2 = datas.customMap( function(movieInfo){
        let newMovieInfo = {};

        newMovieInfo.id = movieInfo.id;
        newMovieInfo.title = movieInfo.title;
        newMovieInfo.year = movieInfo.year;
        newMovieInfo.rating = movieInfo.rating;
        newMovieInfo.genres = movieInfo.genres;

        return newMovieInfo;
    } );

    console.log(datas2);

    function goodMovie(rating) {
        let newMovies = datas2.customFilter( function(movieInfo){
            return movieInfo.rating >= rating
        });
        return newMovies;
    }

    console.log(goodMovie(7));

    const datas3 = datas2.customMap( function(movieInfo){
        return movieInfo.genres;
    } );


    console.log(datas3);

    const datas4 = datas3.flat();
    
    // console.log(datas4);

    const datas5 = datas4.customReduce(function(genreSet, genre) {
        if(genreSet.includes(genre)){
            return genreSet;
        }
        return genreSet.concat(genre);
    }, []);

    console.log(datas5);

    const datas6 = [...new Set(datas4)];
    console.log(datas6);


*/
}