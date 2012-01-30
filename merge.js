/*
** Merge two arrays into a sorted array
*/
exports.merge = function ( array1, array2 ) {

  var sorted_array = new Array();
  var l = 0; var r = 0; var s = 0;

  while( l < array1.length && r < array2.length ) {

    if(array1[l] <= array2[r] && l != array1.length){
      sorted_array.push(array1[l])
      l++;
    }
    else{
      sorted_array.push(array2[r]);
      r++;
    }
  }

  while(l < array1.length){
      sorted_array.push(array1[l]);
      l++;
  }
  while(r < array2.length){
      sorted_array.push(array2[r]);
      r++;
  }

  return sorted_array;
}


